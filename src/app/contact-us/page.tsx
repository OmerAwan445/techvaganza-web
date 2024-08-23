"use client";

import ContactUs from "@/components/ContactUsPage/ContactUs";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const ContactUsPage = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_reCAPTCHA_SITE_KEY ?? "NOT DEFINED"}
    >
      <ContactUs />
    </GoogleReCaptchaProvider>
  );
};

export default ContactUsPage;
