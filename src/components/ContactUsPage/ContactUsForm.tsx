import { contactUsFormAction } from "@/actions/contactUsFormAction";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import contactUsContent from "@/content/contactUsPage";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ErrorMessageToast } from "../commons/ErrorMessageToast";
import SucessMessageToast from "../commons/SucessMessageToast";
import FormSubmitButton from "./FormSubmitButton";
import { useReCaptcha } from "@/hooks/useReCaptcha";

export default function ContactUsForm() {
  const { formDesc, formTitle, servicesOffered } = contactUsContent;

  const { handleChange, handleExpired, isCaptchaChecked, recaptchaRef, resetCaptcha} = useReCaptcha();
  
  const [state, formAction] = useFormState(contactUsFormAction.bind(null, recaptchaRef.current?.getValue() ?? ''), null);
  let { error, success, isCaptchaError } = state || {};
  const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null);
  const [successMessage, setSuccessMessage] = useState<string | null | undefined>(null);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  useEffect(() => {
    if(isCaptchaError) {
      resetCaptcha();
      
    }
  },[isCaptchaError, resetCaptcha]);

  useEffect(() => {
    setSuccessMessage(success);
  }, [success]);
  
 useEffect(() => {
  if(success){
    resetCaptcha();
  }
 },[success, resetCaptcha]);


  return (
    <div className="md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {formTitle}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {formDesc}
      </p>

      <form action={formAction} className="my-8">
        {successMessage && (
          <SucessMessageToast
            sucessMessage={successMessage}
            setSucessMessage={setSuccessMessage}
          />
        )}
        {errorMessage && (
          <ErrorMessageToast
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        )}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phonenumber">Phone Number</Label>
            <Input
              id="phonenumber"
              name="phonenumber"
              placeholder="+1 (908) 123 4567"
              type="tel"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="service">Service Needed</Label>
          <select
            defaultValue={""}
            id="service"
            name="service"
            className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm outline-2 outline-[#a3a3a3] sm:text-sm border-gray-300"
          >
            <option value="" disabled>
              Select a service
            </option>
            {servicesOffered.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here"
            rows={4}
            className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm outline-2 outline-[#a3a3a3] sm:text-sm border-gray-300"
          />
        </LabelInputContainer>
        <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!!}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired}
      />
        <FormSubmitButton isDisabled={!isCaptchaChecked}/>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
