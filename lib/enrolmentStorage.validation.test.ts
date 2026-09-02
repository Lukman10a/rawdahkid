import type { FormData } from "@/components/enrol/types";

// We test the validation logic in useEnrolFlow.ts via pure function extraction
// For RED, we duplicate the current validateForm logic and assert expected failures
// Current validateForm only checks trim, not age range or courses

function currentValidateForm(formData: FormData, selectedCourses: string[] = []): Record<string, string> {
  const newErrors: Record<string, string> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.parentName.trim()) newErrors.parentName = "required";
  if (!formData.parentEmail.trim()) newErrors.parentEmail = "required";
  else if (!emailRegex.test(formData.parentEmail)) newErrors.parentEmail = "invalid";
  if (!formData.parentPhone.trim()) newErrors.parentPhone = "required";
  else if (!/^[\d\s-]*$/.test(formData.parentPhone)) newErrors.parentPhone = "invalid";
  if (!formData.studentName.trim()) newErrors.studentName = "required";
  if (!formData.studentAge.trim()) newErrors.studentAge = "required";
  if (!formData.programme) newErrors.programme = "required";
  if (!formData.classFormat) newErrors.classFormat = "required";
  else if (formData.classFormat === "one-on-one") newErrors.classFormat = "unavailable";
  return newErrors;
}

describe("validateForm — RED: age range and individual courses not yet validated", () => {
  const base: FormData = {
    parentName: "Ali",
    parentEmail: "ali@example.com",
    parentPhone: "1234567890",
    parentCity: "London",
    parentCountry: "GB",
    studentName: "Yusuf",
    studentAge: "8",
    programme: "islamic",
    classFormat: "group",
    additionalInfo: "",
  };

  it("should reject age below 5", () => {
    const form = { ...base, studentAge: "3" };
    const errors = currentValidateForm(form);
    // Current impl only checks trim, so no error — test will FAIL (RED)
    expect(errors.studentAge).toBeDefined();
  });

  it("should reject age above 18", () => {
    const form = { ...base, studentAge: "25" };
    const errors = currentValidateForm(form);
    expect(errors.studentAge).toBeDefined();
  });

  it("should reject non-numeric age", () => {
    const form = { ...base, studentAge: "abc" };
    const errors = currentValidateForm(form);
    expect(errors.studentAge).toBeDefined();
  });

  it("should require at least one course when programme is individual", () => {
    const form = { ...base, programme: "individual" };
    const errors = currentValidateForm(form, []);
    // Current updateFormField clears courses but validateForm doesn't check — RED
    expect(errors.programme).toBeDefined(); // or errors.selectedCourses
    // Alternative: expect a specific courses error
    const hasCoursesError = "selectedCourses" in errors || errors.programme !== undefined;
    expect(hasCoursesError).toBe(true);
  });

  it("should accept valid age 8 and individual with courses", () => {
    const form = { ...base, programme: "individual", studentAge: "8" };
    const errors = currentValidateForm(form, ["Arabic"]);
    expect(Object.keys(errors).length).toBe(0);
  });
});
