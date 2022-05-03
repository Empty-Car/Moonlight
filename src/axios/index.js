import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://54.180.219.114:8080",
});

export const NonTokenInstance = axios.create({
  baseURL: "http://54.180.219.114:8080",
});

Instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
