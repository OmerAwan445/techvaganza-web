"use server";

import { CaptchaError } from "@/errors/CaptchaError";
import { EmailError } from "@/errors/EmailError";
import { FirebaseError } from "@/errors/FirebaseError";
import { FormValidationError } from "@/errors/FormValidationError";
import EmailSvs from "@/services/mailSvs";
import addData from "@/utils/addDataFirebase";
import { checkFormValidation } from "@/utils/checkFormValidation";
import { verifyCaptchaToken } from "@/utils/verifyCaptchaToken";

export async function contactUsFormAction(reCaptchaToken: string, state: any, formData: FormData) {
  try {
    const first_name = formData.get("firstname")?.toString().trim() || "";
    const last_name = formData.get("lastname")?.toString().trim() || "";
    const phone = formData.get("phonenumber")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service_needed = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const userData = { first_name, last_name, phone, email, service_needed, message };

    /* Form Validation */
    checkFormValidation({ first_name, email, service_needed });

    /* Captcha Validation */
    await verifyCaptchaToken(reCaptchaToken);

    /* Add data to Firebase */
    await addData('Contact Us Forms', userData);

    /* Send Email */
    await EmailSvs.sendContactUsEmail(userData);

    return { success: "Form submitted successfully" };
  
  } catch (error: FormValidationError | CaptchaError | any) {
    
    if (error instanceof FormValidationError || error instanceof FirebaseError || error instanceof EmailError) {
      return { error: error.message };
    }
    if (error instanceof CaptchaError) {
      return { error: error.message, isCaptchaError: true };
    }
    return { error: "Server Error" };
  }
}
