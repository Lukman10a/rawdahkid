"use client";

import { useMutation } from "@tanstack/react-query";
import { registerStudent } from "@/lib/api/registration";
import type { RegisterStudentPayload } from "@/lib/api/registration";

export function useRegisterStudentMutation() {
  return useMutation({
    mutationKey: ["register-student"],
    mutationFn: (payload: RegisterStudentPayload) => registerStudent(payload),
  });
}
