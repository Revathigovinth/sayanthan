import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api" // change if needed
});

// ✅ EXISTING APIs
export const loginUser = (data) => API.post("/login", data);
export const bookRoom = (data) => API.post("/book", data);
export const getBookingHistory = () => API.get("/bookings");

// ✅ 🔥 ADD THIS (MISSING ONE)
export const fetchHotels = (filters) =>
  API.get("/hotels", { params: filters });

export default API;