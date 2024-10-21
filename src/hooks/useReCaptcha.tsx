import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function useReCaptcha() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [captchaSuccessMessage, setCaptchaSuccessMessage] = useState<string>("");
  const [captchaErrorMsg, setCaptchaErrorMsg] = useState("");

  const handleChange = (token: string | null) => {
    setIsCaptchaChecked(!!token);
  };

  const handleReCaptchaState = (error: string | undefined, success: string | undefined, isCaptchaError: boolean | undefined) => {
    if (error) {
      setCaptchaErrorMsg(error);
      setCaptchaSuccessMessage('');
    } else if (success) {
      setCaptchaSuccessMessage(success);
      setCaptchaErrorMsg('');
    }
    
    if(isCaptchaError || success){
      recaptchaRef.current?.reset();
      setIsCaptchaChecked(false);
    }
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
    captchaErrorMsg,
    setCaptchaErrorMsg,
    captchaSuccessMessage,
    setCaptchaSuccessMessage,
    handleReCaptchaState,
    isCaptchaChecked,
    handleChange,
    handleExpired,
    resetCaptcha,
  };
}
