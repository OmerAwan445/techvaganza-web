import { FormValidationError } from "@/errors/FormValidationError";

function checkFormValidation(data: Omit<ContactusFormData, 'phone' | 'message' | 'last_name'>): void {
  const { first_name, email, service_needed } = data;

  // Name validation
  if (!first_name) {
    throw new FormValidationError("First Name is required.", "first_name");
  } else if (first_name.length < 2) {
    throw new FormValidationError("Name must be at least 2 characters long.", "first_name");
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email) {
    throw new FormValidationError("Email is required.", "email");
  } else if (!emailPattern.test(email)) {
    throw new FormValidationError("Please enter a valid email address.", "email");
  }

  // Service validation
  if (!service_needed) {
    throw new FormValidationError("Please select Service needed", "service_needed");
  }
}

export { checkFormValidation };
