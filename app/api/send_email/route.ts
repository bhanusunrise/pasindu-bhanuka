import { NextRequest, NextResponse } from "next/server";

import transporter from "@/lib/nodemailer";
import { contactRateLimiter } from "@/lib/rateLimit";
import {
  contactNotificationEmail,
  contactThankYouEmail,
} from "@/data/emails";

import type {
  EmailItem,
  EmailResponse,
} from "@/types/emails";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const rateLimit = await contactRateLimiter.limit(ip);

    if (!rateLimit.success) {
      return NextResponse.json<EmailResponse>(
        {
          success: false,
          message:
            "Too many messages sent. Please wait a few minutes and try again.",
        },
        {
          status: 429,
        },
      );
    }

    const body: EmailItem = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

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

    const notificationTemplate =
      contactNotificationEmail(body);

    const thankYouTemplate =
      contactThankYouEmail(body);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: notificationTemplate.subject,
      text: notificationTemplate.text,
      html: notificationTemplate.html,
    });

    await transporter.sendMail({
      from: `"Pasindu Bhanuka" <${process.env.SMTP_USER}>`,
      to: email,
      subject: thankYouTemplate.subject,
      text: thankYouTemplate.text,
      html: thankYouTemplate.html,
    });

    return NextResponse.json<EmailResponse>({
      success: true,
      message: "Your message has been sent successfully.",
    });
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