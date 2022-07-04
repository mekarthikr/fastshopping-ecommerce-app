import axios from 'axios'

const baseURL="http://localhost:5000"

let headers={};

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzJjOGVmMTc3MjA1ZTRkNmE5NDg2YSIsImlhdCI6MTY1Njk1NTYyNH0.eqp6mRZl53wLrVLpHuXn5NH0eK1PFtLkYIRaYFO44NY"

const axiosInstance=axios.create({
    baseURL:baseURL
    // headers:{
    //     Authen
    // }
})

axiosInstance.interceptors.request.use((request)=>{
    request.headers["Authorization"]=token;
    console.log('request sent')
    return request;
},(error)=>{
    console.log("error",error)
    return Promise.reject(error)
})

export default axiosInstance;