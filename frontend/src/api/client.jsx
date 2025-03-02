import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE_URL;
const baseURL = 'http://localhost:9000'
const client = axios.create({ baseURL});
client.defaults.withCredentials = true;
axios.defaults.withCredentials = true;
export default client;
