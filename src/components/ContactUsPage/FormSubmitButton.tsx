"use client";

import React from 'react';
import { useFormStatus } from 'react-dom';

const FormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`relative group/btn block w-full h-10 rounded-md font-medium text-white transition-all duration-300 ${
        pending
          ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] animate-pulse'
          : 'bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
      }`}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <span className="animate-spin inline-block h-5 w-5 border-4 border-t-transparent border-white rounded-full"></span>
          <span className="ml-2">Submitting...</span>
        </>
      ) : (
        <>
          Submit
          <span className="animate-bounce ml-2">&rarr;</span>
        </>
      )}
      <BottomGradient />
    </button>
  );
};

export default FormSubmitButton;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
