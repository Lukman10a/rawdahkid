import { http } from "@/lib/api/http";
import type { RegisterStudentPayload, RegisterStudentResponse } from "./types";
import { normalizeRegisterStudentResponse } from "./types";

export async function registerStudent(
  payload: RegisterStudentPayload,
): Promise<RegisterStudentResponse> {
  const { data } = await http.post<unknown>("/register", payload);
  return normalizeRegisterStudentResponse(data as string | Record<string, unknown>);
}
