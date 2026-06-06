import axios from "axios";

const API = axios.create({
  baseURL: "https://lead-management-6676.onrender.com/api/leads",
});

export default API;