import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, formType } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER || "managedbybprojects@gmail.com";
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || "managedbybprojects@gmail.com";

    // If SMTP password is not set yet in env, log helpful message
    if (!pass) {
      console.warn(
        "⚠️ SMTP_PASS is missing in environment variables. Form received successfully, but email dispatch requires SMTP_PASS in .env.local."
      );
      return NextResponse.json({
        success: true,
        message: "Form received. Configure SMTP_PASS in .env.local to enable live email delivery.",
        demoMode: true,
      });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: {
        user,
        pass,
      },
    });

    const isQuoteRequest = formType === "quote_request";
    const subjectTitle = isQuoteRequest
      ? `🚨 New Sourcing Quote Request from ${firstName} ${lastName}`
      : `📩 New Contact Inquiry from ${firstName} ${lastName}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 24px; border-radius: 8px;">
        <h2 style="color: #1D4ED8; margin-top: 0;">${subjectTitle}</h2>
        <p style="font-size: 14px; color: #555;">You have received a new submission from the <strong>B-Projects Ventures Limited</strong> website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #111;">${firstName} ${lastName || ""}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
            <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #1D4ED8;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
            <td style="padding: 8px 0; color: #111;">${phone || "Not provided"}</td>
          </tr>
          ${
            message
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; color: #111; line-height: 1.5;">${message.replace(/\n/g, "<br/>")}</td>
          </tr>
          `
              : ""
          }
        </table>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0 16px 0;" />
        <p style="font-size: 11px; color: #888; text-align: center;">
          B-Projects Ventures Limited (RC NO: 9646602) • Automated Website Inquiry System
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${firstName} ${lastName || ""}" <${user}>`,
      replyTo: email,
      to: toEmail,
      subject: subjectTitle,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email via SMTP:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email via SMTP." },
      { status: 500 }
    );
  }
}
