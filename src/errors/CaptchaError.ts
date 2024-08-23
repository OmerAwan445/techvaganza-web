export class CaptchaError extends Error {
    public readonly isCaptchaError: boolean;
  
    constructor(message: string) {
      super(message);
      this.name = "CaptchaError";
      this.isCaptchaError = true;
    }
  }