import axios from "axios";

export async function verifyCaptchaToken(reCaptchaToken: string) {
  if (!reCaptchaToken)
    return { isCaptchaValid: false, captchaErrMsg: "Invalid reCAPTCHA" };
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
      return {
        isCaptchaValid: false,
        captchaErrMsg: "Failed reCAPTCHA verification, Please try again",
      };
    }

    return { isCaptchaValid: true, captchaErrMsg: null };
  } catch (err) {
    console.log(err, "error");
    return {
      isCaptchaValid: false,
      captchaErrMsg: "Failed reCAPTCHA verification",
    };
  }
}
