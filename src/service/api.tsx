import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const apiSend = axios.create({
    baseURL: "https://lu-lombardi-server.herokuapp.com"
})