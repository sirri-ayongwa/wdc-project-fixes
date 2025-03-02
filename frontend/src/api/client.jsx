import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE_URL;
const client = axios.create({baseURL: "http://localhost:9000", withCredentials: true});
export default client;
