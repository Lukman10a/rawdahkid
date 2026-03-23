export type InitializePaymentPayload = {
  email: string;
  amount: number;
};

export type InitializePaymentData = {
  authorization_url?: string;
  paymentUrl?: string;
  url?: string;
  reference?: string;
  access_code?: string;
  [key: string]: unknown;
};

export type InitializePaymentResponse = {
  success: boolean;
  message: string;
  data?: InitializePaymentData;
};

type InitializePaymentRawResponse =
  | string
  | {
      success?: boolean;
      message?: string;
      data?: InitializePaymentData;
      authorization_url?: string;
      paymentUrl?: string;
      url?: string;
      [key: string]: unknown;
    };

export function normalizeInitializePaymentResponse(
  raw: InitializePaymentRawResponse,
): InitializePaymentResponse {
  if (typeof raw === "string") {
    return {
      success: !/must register first|error|failed/i.test(raw),
      message: raw,
    };
  }

  const topLevelUrl =
    typeof raw.authorization_url === "string"
      ? raw.authorization_url
      : typeof raw.paymentUrl === "string"
        ? raw.paymentUrl
        : typeof raw.url === "string"
          ? raw.url
          : undefined;

  const dataWithUrl = raw.data || (topLevelUrl ? { authorization_url: topLevelUrl } : undefined);

  const message =
    typeof raw.message === "string"
      ? raw.message
      : raw.success === false
        ? "Payment initialization failed"
        : "Payment initialized successfully";

  const success =
    typeof raw.success === "boolean"
      ? raw.success
      : !/must register first|error|failed/i.test(message);

  return {
    success,
    message,
    data: dataWithUrl,
  };
}

export function getPaymentRedirectUrl(data?: InitializePaymentData): string | null {
  if (!data) return null;

  const directUrl =
    typeof data.authorization_url === "string"
      ? data.authorization_url
      : typeof data.paymentUrl === "string"
        ? data.paymentUrl
        : typeof data.url === "string"
          ? data.url
          : null;

  return directUrl;
}
