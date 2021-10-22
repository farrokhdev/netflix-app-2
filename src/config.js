import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://netflix-admin-panel.herokuapp.com/api",
});
