import { describe, expect, it } from "vitest";
import { myLast } from "../src/1";

describe("1. myLast", () => {
  it("returns the last element of a non-empty list", () => {
    expect(myLast([1, 2, 3, 4])).toBe(4);
    expect(myLast(["x", "y", "z"])).toBe("z");
  });
  it("throws on empty list (like Haskell)", () => {
    expect(() => myLast([] as number[])).toThrow();
  });
});
