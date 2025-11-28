import { describe, expect, it } from "vitest";
import { myReverse } from "../src/5";

describe("5. myReverse", () => {
  it("reverses the list", () => {
    expect(myReverse([] as number[])).toEqual([]);
    expect(myReverse([1])).toEqual([1]);
    expect(myReverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(myReverse(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });
});
