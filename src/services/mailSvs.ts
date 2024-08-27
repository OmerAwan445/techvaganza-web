import { EmailError } from "@/errors/EmailError";
import { getEnv } from "@/utils/getEnv";
import nodemailer from "nodemailer";

class EmailSvs {
  private static toSendEmail = true;

  private static transporter = nodemailer.createTransport({
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

    const { first_name, last_name, email, message } = userData;

    const mailOptions = {
      from: `"Message From ${first_name} ${last_name}" <${email}>`,
      to: getEnv("TO_EMAIL_NODEMAILER"),
      subject: `Contact Us Message from ${first_name} ${last_name}`,
      html: `
      <p>Message from: ${first_name} ${last_name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
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
