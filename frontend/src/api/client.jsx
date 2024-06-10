import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const client = axios.create({ baseURL, withCredentials: true });
axios.defaults.withCredentials = true;

export default client;
