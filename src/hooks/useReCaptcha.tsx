import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function useReCaptcha() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleChange = (token: string | null) => {
    setIsCaptchaChecked(!!token);
  };

  const handleExpired = () => {
    setIsCaptchaChecked(false);
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setIsCaptchaChecked(false);
  };

  return {
    recaptchaRef,
    isCaptchaChecked,
    handleChange,
    handleExpired,
    resetCaptcha,
  };
}
