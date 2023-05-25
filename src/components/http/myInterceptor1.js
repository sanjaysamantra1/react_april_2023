import axios from "axios";

export function myInterceptor1() {
  axios.interceptors.request.use((req) => {
    console.log(req);
    if (req.url.includes("users")) {
      req.headers.authorization = "my secret token";
    }
    return req;
  });
}

export function logTimeInterceptor() {
  axios.interceptors.request.use((req) => {
    req.meta = req.meta || {};
    req.meta.requestStartedAt = new Date().getTime();
    return req;
  });
}

export function responseInterceptor1() {
  axios.interceptors.response.use((res) => {
    res.durationInMs = new Date().getTime() - res.config.meta.requestStartedAt;
    res.currentTime = new Date().toLocaleTimeString();
    return res;
  });
}
