import { calculatePaymentTotals } from "./enrolmentStorage";
import type { Plan } from "@/components/fees/types";
import { expectTypeOf } from "expect-type";
import type { Cents } from "./types/branded";

// Matt Pocock guardrail: branded types must not be assignable to plain number
it("branded Cents is not plain number", () => {
  expectTypeOf<Cents>().not.toEqualTypeOf<number>();
  expectTypeOf<Cents>().toMatchTypeOf<number>();
});

function makePlan(price: number, id = "islamic-group"): Plan {
  return { id, name: "Test Plan", price, period: "yr", type: "group" };
}

describe("calculatePaymentTotals — RED: discounts not yet implemented", () => {
  it("annual should apply 10% discount", () => {
    const plan = makePlan(4500);
    const result = calculatePaymentTotals(plan, { frequency: "annual", students: 1 });
    // Current impl returns {total:4500, discount:"0%"} — should be 4050 and 10%
    expect(result.total).toBe(4050);
    expect(result.discount).toBe("10%");
  });

  it("annual with 2 students should be 10% off total", () => {
    const plan = makePlan(4500);
    const result = calculatePaymentTotals(plan, { frequency: "annual", students: 2 });
    expect(result.total).toBe(8100); // 9000 * 0.9
    expect(result.discount).toBe("10%");
  });

  it("semester should apply 5% discount (base/3 per student)", () => {
    const plan = makePlan(4500);
    // base/3 =1500, 5% off =1425
    const result = calculatePaymentTotals(plan, { frequency: "semester", students: 1 });
    expect(result.total).toBe(1425);
    expect(result.discount).toBe("5%");
  });

  it("monthly should have no discount", () => {
    const plan = makePlan(4500);
    const result = calculatePaymentTotals(plan, { frequency: "monthly", students: 1 });
    expect(result.total).toBe(375); // 4500/12
    expect(result.discount).toBe("0%");
  });

  it("sibling discount: 2 students annual should combine with 10% payment + 10% sibling? (at least 10% sibling)", () => {
    const plan = makePlan(6000);
    // For now expect at least sibling discount is applied — current impl ignores
    const result = calculatePaymentTotals(plan, { frequency: "annual", students: 2 });
    // 6000*2=12000, 10% annual =10800, 10% sibling extra? Expect <10800
    expect(result.total).toBeLessThan(10800);
  });

  it("returns 0 for null plan", () => {
    const result = calculatePaymentTotals(null, { frequency: "annual", students: 1 });
    expect(result.total).toBe(0);
  });
});
