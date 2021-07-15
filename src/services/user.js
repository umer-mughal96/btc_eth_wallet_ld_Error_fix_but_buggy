import axios from 'axios'




export const emailForCode = (data) => {
    return axios.post("http://192.168.10.30:3002/drau/api/v1/user/email/code", data);
}


export const mobileForCode = (data) => {
    return axios.post("http://192.168.10.30:3002/drau/api/v1/user/mobile/code", data);
}




export const signupUser = (data) => {
    return axios.post("http://192.168.10.30:3002/drau/api/v1/auth/register", data);
}