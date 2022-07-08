import axios from "axios";

const baseURL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    request.headers["Authorization"] = token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
