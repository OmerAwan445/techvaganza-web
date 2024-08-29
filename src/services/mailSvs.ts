import { EmailError } from "@/errors/EmailError";
import { getEnv } from "@/utils/getEnv";
import nodemailer from "nodemailer";

class EmailSvs {
  private static toSendEmail = true;

  private static transporter = nodemailer.createTransport({
    // host: getEnv("SMTP_SERVICE"),
    service: getEnv("SMTP_SERVICE"),
    // port: 465,
    connectionTimeout: 10000,
    auth: {
      user: getEnv("FROM_EMAIL_NODEMAILER"),
      pass: getEnv("FROM_EMAIL_PASSWORD_NODEMAILER"),
    },
    secure: true,
  });

  public static async sendContactUsEmail(userData: ContactUsFormData) {
    if (!this.toSendEmail) {
      return "Email sending disabled";
    }

    const { first_name, last_name, email, message, phone, service_needed } = userData;

    const mailOptions = {
      from: `"${first_name} ${last_name}" <${getEnv("FROM_EMAIL_NODEMAILER")}>`,
      to: getEnv("TO_EMAIL_NODEMAILER"),
      replyTo: email,
      subject: `New Contact Us Message from ${first_name} ${last_name}`,
      html: `
        <h2>New Contact Us Message</h2>
        <p><strong>From:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Needed:</strong> ${service_needed}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <hr/>
        <p>You can reply to this message directly by clicking <a href="mailto:${email}">here</a>.</p>
        <p>Best regards,</p>
        <p>Your Website Team</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error: any) {
      console.log(error, "error");

      if (error.code === "ECONNREFUSED" || error.code === "ETIMEDOUT") {
        throw new EmailError(
          "Unable to connect to the email server. Please try again later."
        );
      } else if (error.code === "EAUTH") {
        throw new EmailError(
          "Email authentication failed. Please check your credentials."
        );
      } else {
        throw new EmailError(`Failed to send email: ${error.message}`);
      }
    }
  }
}

export default EmailSvs;
