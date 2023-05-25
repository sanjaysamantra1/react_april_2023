import axios from "axios";

const client = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
});
client.interceptors.request.use((req) => {
  console.log(req)
  console.log(`${req.baseURL} started at ${new Date().toLocaleTimeString()}`);
  return req;
});
export default client;
