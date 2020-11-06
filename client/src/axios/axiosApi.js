import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    baseURL: "http://localhost:3000/"
});