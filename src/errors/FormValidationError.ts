export class FormValidationError extends Error {
    public readonly isValidationError: boolean;
    public readonly field?: string;
  
    constructor(message: string, field?: string) {
      super(message);
      this.name = "FormValidationError";
      this.isValidationError = true;
      this.field = field;
    }
  }