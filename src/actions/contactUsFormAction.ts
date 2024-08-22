"use server";

import addData, { getDoument } from "@/utils/addDataFirebase";
import { checkFormValidation } from "@/utils/checkFormValidation";

export async function contactUsFormAction(state: any, formData: FormData) {
    const first_name = formData.get("firstname")?.toString().trim() || "";
    const last_name = formData.get("lastname")?.toString().trim() || "";
    const phone_num = formData.get("phonenumber")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const service_needed = formData.get("service")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    
  let success = null;
  let error = null;
  
  error = checkFormValidation({first_name, email, service_needed});  

  if(error) return {error, success};
    // If all validations pass
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "success",
        message: "Form submitted successfully",
      });
    }, 2000);
  });
  const { result, error:_error } = await addData('users', 'ContactUs Forms', { first_name, last_name, phone_num, email, service_needed, message });
  if(_error) return {error: "Server Error", success };
  
        // const {result} = await getDoument("ContactUs Forms", "30waN6W8FWZGxKtSZXyJ")
        // console.log(result)
  success = "Form submitted successfully";
  return {error, success, result };
}
