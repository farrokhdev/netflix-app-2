import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://netflix1-app.herokuapp.com/api",
});
