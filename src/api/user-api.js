import axios from "axios";
let api;
export default api = axios.create({
    baseURL: "http://localhost:9999",
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

// apis

// request otp
export const needOtpForEmail = async(data)=>api.post("/user/email" , data);
// verify otp and login or Signup
export const needVerifyForEmail = async(data)=>api.post("/user/email/create" , data);
// activate account
export const needActivate = async(data)=>api.post("/user/activate" , data);
// logout
export const needLogout = async()=>api.get("/user/logout");
// refresh token
export const needRefreshToken = async()=>api.get("/user/refresh");