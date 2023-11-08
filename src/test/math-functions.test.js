import { sum, substract, multiply, divide } from "utils/math-functions";

describe("Maths functions", () => {
  it("sums correctly 2 values", () => {
    expect(sum(-1.5, 0.5)).toBe(-1);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(1, 1)).toBe(2);
    expect(sum(0, 0)).toBe(0);
    expect(sum()).toBe(0);
  });
  it("susstracts correctly 2 values", () => {
    expect(substract(-1.5, 0.5)).toBe(-2);
    expect(substract(-2, -1)).toBe(-1);
    expect(substract(-1, 1)).toBe(-2);
    expect(substract(1, 1)).toBe(0);
    expect(substract(0, 0)).toBe(0);
    expect(substract()).toBe(0);
  });
  it("multiplies correctly 2 values", () => {
    expect(multiply(-1.5, 0.5)).toBe(-0.75);
    expect(multiply(-2.5, -2)).toBe(5);
    expect(multiply(-2, -1)).toBe(2);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply()).toBe(0);
  });
  it("divides correctly 2 values", () => {
    expect(divide(-1.5, 0.5)).toBe(-3);
    expect(divide(-2.5, -2)).toBe(1.25);
    expect(divide(-2, -1)).toBe(2);
    expect(divide(-1, 1)).toBe(-1);
    expect(divide(1, 1)).toBe(1);
    expect(() => divide(5, 0)).toThrowError("You can't divide by 0");
    expect(() => divide()).toThrowError("You can't divide by 0");
  });
});
