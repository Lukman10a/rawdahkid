export type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  type: "group" | "one-on-one";
};

export type ModalState =
  | "idle"
  | "register_required"
  | "payment_config"
  | "payment_overview";

export type PaymentConfig = {
  frequency: "monthly" | "semester" | "annual";
  students: number;
};

export type PaymentTotals = {
  total: number;
  discount: string;
};

export type Translator = (key: string) => string;
