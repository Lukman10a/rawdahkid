import axios from "axios";

const API_TIMEOUT_MS = 15000;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "/api";

export const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export type ApiError = {
  status?: number;
  message: string;
  details?: unknown;
};

export function toApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    return {
      status: error.response?.status,
      message: (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        "Something went wrong",
      details: error.response?.data,
    };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "Unknown error" };
}
