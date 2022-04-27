import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://54.180.165.105:8081",
});

export const NonTokenInstance = axios.create({
  baseURL: "http://54.180.165.105:8081",
});

Instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
