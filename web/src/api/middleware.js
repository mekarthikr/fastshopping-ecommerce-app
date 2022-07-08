import axios from "axios";

const baseURL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (request) => {
    console.log("interseptop req",request)
    const token = localStorage.getItem("token");
    console.log("token token",token)
    request.headers["Authorization"] = token;
    console.log("request sent");
    return request;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
