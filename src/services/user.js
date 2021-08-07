import axios from 'axios'




export const emailForCode = (data) => {
    return axios.post("http://192.168.10.12:3008/yearn/api/v1/auth/email-verify", data);
}


export const mobileForCode = (data) => {
    return axios.post("http://192.168.10.12:3008/yearn/api/v1/auth/mobile-verify", data);
}




export const signupUser = (data) => {
    return axios.post("http://192.168.10.12:3008/yearn/api/v1/auth/register", data);
}