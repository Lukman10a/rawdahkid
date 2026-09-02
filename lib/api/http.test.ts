import { toApiError } from "./http";
import axios from "axios";

describe("toApiError — guardrail", () => {
  it("should extract message from axios error with response data", () => {
    const err = {
      isAxiosError: true,
      message: "Network Error",
      response: { status: 400, data: { message: "Already exists" } },
    } as unknown as Error;
    // Mock axios.isAxiosError
    const spy = jest.spyOn(axios, "isAxiosError").mockReturnValue(true);
    // We need to craft a real axios-like error object with response
    const axiosErr = {
      response: { status: 400, data: { message: "Already exists" } },
      message: "Request failed",
    } as any;
    // Make isAxiosError return true for this object
    spy.mockReturnValue(true);
    const result = toApiError(axiosErr);
    expect(result.message).toBe("Already exists");
    expect(result.status).toBe(400);
    spy.mockRestore();
  });

  it("should fallback to error.message for generic Error", () => {
    const result = toApiError(new Error("Registration failed"));
    expect(result.message).toBe("Registration failed");
  });

  it("should return Unknown error for unknown type", () => {
    const result = toApiError(null);
    expect(result.message).toBe("Unknown error");
  });
});
