import axios from "./axios.config";

const AUTH_ENDPOINT = "api/auth/login";
const CHANGE_PWD_ENDPOINT = "api/auth/change-password";

export const requestLogin = (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return axios.post(AUTH_ENDPOINT, formData);
}