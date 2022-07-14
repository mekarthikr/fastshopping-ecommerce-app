import axios from "axios";

const baseURL = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (request) => {
    console.log(request.data)
    const token = localStorage.getItem("token");
    request.headers["Authorization"] = token;
  //  request.headers["Access-Control-Allow-Origin"]="*"
  //  request.headers["Content-Type"]="undefined"
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;