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
export const needOtp = async(data)=>api.post("/user" , data);
// verify otp and login or Signup
export const needVerify = async(data)=>api.post("/user/create" , data);
// activate account
export const needActivate = async(data)=>api.post("/user/activate" , data);
// logout
export const needLogout = async()=>api.get("/user/logout");
// refresh token
export const needRefreshToken = async()=>api.get("/user/refresh");