type ValidationResult = string | null;

function checkFormValidation(data: Omit<ContactusFormData,'phone'| 'message' | 'last_name'>): ValidationResult {
    const { first_name, email, service_needed } = data;

 // Name validation
 if (!first_name) {
    return "First Name is required.";
  } else if (first_name.length < 2) {
    return "Name must be at least 2 characters long.";
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email) {
    return "Email is required.";
  } else if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  // Service validation
  if (!service_needed) {
    return "Please select Service needed";
  }
  // If all validations pass
  return null;
}


export { checkFormValidation };