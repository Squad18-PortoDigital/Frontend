import axios from "axios";

const time = 30000;

export const app = axios.create({
  // baseURL: "http://31.97.17.191",
  baseURL: process.env.REACT_APP_API_URL+"/api",
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: time,
});