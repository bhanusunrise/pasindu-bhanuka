import { NextResponse } from "next/server";

import transporter from "@/lib/nodemailer";
import {
  contactNotificationEmail,
  contactThankYouEmail,
} from "@/data/emails";

import type {
  EmailItem,
  EmailResponse,
} from "@/types/emails";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body: EmailItem = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json<EmailResponse>(
        {
          success: false,
          message: "Please fill in all fields.",
        },
        {
          status: 400,
        },
      );
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json<EmailResponse>(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP environment variables are missing.");

      return NextResponse.json<EmailResponse>(
        {
          success: false,
          message: "Email service is currently unavailable.",
        },
        {
          status: 500,
        },
      );
    }

    // Escape values before using them inside HTML email templates
    const safeData: EmailItem = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
    };

    const notificationTemplate = contactNotificationEmail(safeData);
    const thankYouTemplate = contactThankYouEmail(safeData);

    // Send notification email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: notificationTemplate.subject,
      text: notificationTemplate.text,
      html: notificationTemplate.html,
    });

    // Send confirmation email to the visitor
    await transporter.sendMail({
      from: `"Pasindu Bhanuka" <${process.env.SMTP_USER}>`,
      to: email,
      subject: thankYouTemplate.subject,
      text: thankYouTemplate.text,
      html: thankYouTemplate.html,
    });

    return NextResponse.json<EmailResponse>(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Send email error:", error);

    return NextResponse.json<EmailResponse>(
      {
        success: false,
        message: "Unable to send your message. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}