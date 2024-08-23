import axios from "axios";
import { CaptchaError } from "@/errors/CaptchaError";

export async function verifyCaptchaToken(reCaptchaToken: string): Promise<void> {
  if (!reCaptchaToken) {
    throw new CaptchaError("Invalid reCAPTCHA token.");
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: reCaptchaToken,
        },
      }
    );

    const { success, score } = response.data;

    if (!success || score < 0.5) {
      throw new CaptchaError("Failed reCAPTCHA verification, please try again.");
    }
  } catch (err) {
    console.log(err, "error");
    throw new CaptchaError("Failed reCAPTCHA verification.");
  }
}
