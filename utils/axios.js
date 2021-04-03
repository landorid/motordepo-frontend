import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API || "",
});

export default client;
