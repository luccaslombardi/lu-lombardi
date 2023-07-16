import axios from "axios";

export const api = axios.create({
    baseURL: "https://feedback-widget-backend-production-476a.up.railway.app"
})

export const apiSend = axios.create({
    baseURL: "https://lu-lombardi-server.herokuapp.com"
})