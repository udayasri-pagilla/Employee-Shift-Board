import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const login = (data) => api.post("/login", data);

export const getShifts = (token) =>
  api.get("/shifts", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const createShift = (data, token) =>
  api.post("/shifts", data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteShift = (id, token) =>
  api.delete(`/shift/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export default api;
