import { http } from "@/lib/api/http";
import type {
  InitializePaymentPayload,
  InitializePaymentResponse,
} from "./types";
import { normalizeInitializePaymentResponse } from "./types";

export async function initializePayment(
  payload: InitializePaymentPayload,
): Promise<InitializePaymentResponse> {
  const { data } = await http.post<unknown>("/payment/initialize", payload);
  return normalizeInitializePaymentResponse(data as string | Record<string, unknown>);
}
