import type { EmailItem } from "@/types/emails";

export function contactNotificationEmail(data: EmailItem) {
  return {
    subject: `Portfolio Contact: ${data.subject}`,

    text: `
You received a new message from your portfolio website.

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
    `.trim(),

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2>New Portfolio Contact</h2>

        <p>Someone contacted you through your portfolio website.</p>

        <table style="border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 6px 16px 6px 0;"><strong>Name</strong></td>
            <td>${data.name}</td>
          </tr>

          <tr>
            <td style="padding: 6px 16px 6px 0;"><strong>Email</strong></td>
            <td>${data.email}</td>
          </tr>

          <tr>
            <td style="padding: 6px 16px 6px 0;"><strong>Subject</strong></td>
            <td>${data.subject}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <strong>Message</strong>

          <p
            style="
              padding: 16px;
              background: #f5f5f5;
              border-left: 4px solid #333;
              white-space: pre-wrap;
            "
          >${data.message}</p>
        </div>

        <p style="margin-top: 24px;">
          You can reply directly to this email to contact ${data.name}.
        </p>
      </div>
    `,
  };
}

export function contactThankYouEmail(data: EmailItem) {
  return {
    subject: "Thank you for contacting me",

    text: `
Hi ${data.name},

Thank you for contacting me through my portfolio.

I have received your message regarding "${data.subject}" and will get back to you as soon as possible.

Your message:

${data.message}

Best regards,
Pasindu Bhanuka
    `.trim(),

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2>Thank you for reaching out!</h2>

        <p>Hi ${data.name},</p>

        <p>
          Thank you for contacting me through my portfolio.
          I have successfully received your message regarding
          <strong>${data.subject}</strong>.
        </p>

        <p>
          I will review your message and get back to you as soon as possible.
        </p>

        <div style="margin-top: 24px;">
          <strong>Your message</strong>

          <p
            style="
              padding: 16px;
              background: #f5f5f5;
              border-left: 4px solid #333;
              white-space: pre-wrap;
            "
          >${data.message}</p>
        </div>

        <p style="margin-top: 28px;">
          Best regards,<br />
          <strong>Pasindu Bhanuka</strong>
        </p>
      </div>
    `,
  };
}