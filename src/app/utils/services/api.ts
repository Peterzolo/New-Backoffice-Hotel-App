// api.ts
import axios, { AxiosRequestConfig } from "axios";

const baseURL = "http://localhost:4000/api/v1";

const apiRequest = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await apiRequest(config);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export default apiRequest;
