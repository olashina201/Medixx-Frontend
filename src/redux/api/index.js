import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/api/signin", formData);
export const signUp = (formData) => API.post("/api/signup", formData);

export const appointment = (formData) => API.post("/api/appointment", formData);

export const fetchUser = (id) => API.get(`/profile/${id}`);
export const fetchUsers = (page) => API.get(`/users?page=${page}`);
