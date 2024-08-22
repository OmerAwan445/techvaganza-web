"use server";

import addData from "@/utils/addDataFirebase";
import { checkFormValidation } from "@/utils/checkFormValidation";

export async function contactUsFormAction(state: any, formData: FormData) {
    const first_name = formData.get("firstname")?.toString().trim() || "";
    const last_name = formData.get("lastname")?.toString().trim() || "";
    const phone_num = formData.get("phonenumber")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service_needed = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    
  
  const error = checkFormValidation({first_name, email, service_needed});  

  if(error) return {error};
  const { result, error:_error } = await addData('Contact Us Forms', { first_name, last_name, phone_num, email, service_needed, message });
  if(_error) return {error: "Server Error" };
    
  return { success: 'Form Submited Successfully' };
}
