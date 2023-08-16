import { BASE_URL } from "./base_url"
import { commonRequest } from "./commonRqsts"

export const userRegister=async (body)=>{
  return commonRequest("POST",`${BASE_URL}/register`,body)
}

export const userLogin=async(body)=>{
    return commonRequest("POST",`${BASE_URL}/login`,body)
}

export const addImages=async(id,body,header)=>{
return commonRequest("PUT",`${BASE_URL}/image_upload/${id}`,body,header)
}

export const getUserDetails=async(id)=>{
  return commonRequest("GET",`${BASE_URL}/get_user_details/${id}`,"")
}

export const removeImage=async(id,body)=>{
  return commonRequest("PUT",`${BASE_URL}/image_delete/${id}`,body)
}
export const profileUpdate=async(id,body,header)=>{
  return commonRequest("PUT",`${BASE_URL}/update_profile/${id}`,body,header)
}

export const allUsers=async()=>{
  return commonRequest("GET",`${BASE_URL}/get_all_users`,"")
}