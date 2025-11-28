import { describe, expect, it } from "vitest";
import { myLength } from "../src/4";

describe("4. myLength", () => {
  it("counts the number of elements", () => {
    expect(myLength([] as number[])).toBe(0);
    expect(myLength([1])).toBe(1);
    expect(myLength([1, 2, 3, 4])).toBe(4);
  });
});
