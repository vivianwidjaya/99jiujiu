import { describe, expect, it } from "vitest";
import { isPalindrome } from "../src/6";

describe("6. isPalindrome", () => {
  it("reverses the list", () => {
    expect(isPalindrome("racecar".split(""))).toEqual(true);
    expect(isPalindrome([1, 2, 3])).toEqual(false);
    expect(isPalindrome([1, 2, 0, 2, 1])).toEqual(true);
    expect(isPalindrome([1, 2, 2, 1])).toEqual(true);
    expect(isPalindrome([1, 2, 3, 4])).toEqual(false);
  });
});
