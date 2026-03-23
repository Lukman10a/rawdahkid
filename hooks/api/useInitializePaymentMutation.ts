"use client";

import { useMutation } from "@tanstack/react-query";
import { initializePayment } from "@/lib/api/payment";
import type { InitializePaymentPayload } from "@/lib/api/payment";

export function useInitializePaymentMutation() {
  return useMutation({
    mutationKey: ["initialize-payment"],
    mutationFn: (payload: InitializePaymentPayload) => initializePayment(payload),
  });
}
