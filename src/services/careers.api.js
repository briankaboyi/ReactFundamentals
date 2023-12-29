import axios from "axios";

const BASE_URL =import.meta.env.VITE_BASE_URL


export async function getAllCareers() {
  try {
    const response = await axios.get(`${BASE_URL}/careers`);
    return response
  } catch (e) {
    console.log(e);
  }
}
