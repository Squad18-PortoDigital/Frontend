import axios from "axios";

const time = 30000;

export const app = axios.create({
  baseURL: "http://31.97.17.191",
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: time,
});