"use server";
import axios from "axios";
import addData from "@/utils/addDataFirebase";

export async function contactUsFormAction(
  state: any,
  formData: FormData,
  reCaptchaToken: string
) {
  const firstName = formData.get("firstname")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  // other fields...

  if (!reCaptchaToken) return { error: "Invalid reCAPTCHA", success: null };

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
    return { error: "Failed reCAPTCHA verification", success: null };
  }

  // Proceed with your form submission
  const { result, error } = await addData("users", "ContactUs Forms", {
    firstName,
    email /* other fields */,
  });

  return { error, success: "Form submitted successfully" };
}
