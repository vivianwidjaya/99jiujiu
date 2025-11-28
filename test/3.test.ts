import { describe, expect, it } from "vitest";
import { elementAt } from "../src/3";

describe("3. elementAt", () => {
  it("returns the k-th element (1-based index)", () => {
    expect(elementAt([1, 2, 3], 2)).toBe(2);
    expect(elementAt(["a", "b", "c"], 3)).toBe("c");
  });
  it("throws when k is out of bounds", () => {
    expect(() => elementAt([1, 2, 3], 0)).toThrow();
    expect(() => elementAt([1, 2, 3], 4)).toThrow();
  });
});
