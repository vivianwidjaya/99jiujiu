import { describe, expect, it } from "vitest";
import { myButLast } from "../src/2";

describe("2. myButLast", () => {
  it("returns the second last element", () => {
    expect(myButLast([1, 2, 3, 4])).toBe(3);
    expect(myButLast(["a", "b", "c", "d"])).toBe("c");
  });

  it("throws on lists shorter than 2", () => {
    expect(() => myButLast([] as number[])).toThrow();
    expect(() => myButLast([1])).toThrow();
  });
});
