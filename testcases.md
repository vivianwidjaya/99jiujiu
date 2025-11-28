// test/problems01_10.test.ts
import { describe, it, expect } from "vitest";
import {
myLast,
myButLast,
elementAt,
myLength,
myReverse,
isPalindrome,
flatten,
compress,
pack,
encode,
} from "../src/problems01_10";

describe("P01 - myLast", () => {
it("returns the last element of a non-empty list", () => {
expect(myLast([1, 2, 3, 4])).toBe(4);
expect(myLast(["a", "b", "c"])).toBe("c");
});

it("throws on empty list (like Haskell)", () => {
expect(() => myLast([] as number[])).toThrow();
});
});

describe("P02 - myButLast", () => {
it("returns the second last element", () => {
expect(myButLast([1, 2, 3, 4])).toBe(3);
expect(myButLast(["a", "b", "c", "d"])).toBe("c");
});

it("throws on lists shorter than 2", () => {
expect(() => myButLast([] as number[])).toThrow();
expect(() => myButLast([1])).toThrow();
});
});

describe("P03 - elementAt", () => {
it("returns the k-th element (1-based index)", () => {
expect(elementAt([1, 2, 3], 2)).toBe(2);
expect(elementAt(["a", "b", "c"], 3)).toBe("c");
});

it("throws when k is out of bounds", () => {
expect(() => elementAt([1, 2, 3], 0)).toThrow();
expect(() => elementAt([1, 2, 3], 4)).toThrow();
});
});

describe("P04 - myLength", () => {
it("counts the number of elements", () => {
expect(myLength([] as number[])).toBe(0);
expect(myLength([1])).toBe(1);
expect(myLength([1, 2, 3, 4])).toBe(4);
});
});

describe("P05 - myReverse", () => {
it("reverses the list", () => {
expect(myReverse([] as number[])).toEqual([]);
expect(myReverse([1])).toEqual([1]);
expect(myReverse([1, 2, 3])).toEqual([3, 2, 1]);
expect(myReverse(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});
});

describe("P06 - isPalindrome", () => {
it("detects palindromes", () => {
expect(isPalindrome([1, 2, 3])).toBe(false);
expect(isPalindrome("madamimadam".split(""))).toBe(true);
expect(isPalindrome([1, 2, 4, 8, 16, 8, 4, 2, 1])).toBe(true);
});
});

describe("P07 - flatten", () => {
it("flattens nested lists", () => {
expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
expect(flatten([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
expect(flatten([[["a"]], "b", ["c", ["d"]]])).toEqual(["a", "b", "c", "d"]);
});
});

describe("P08 - compress", () => {
it("removes consecutive duplicates", () => {
expect(compress([] as string[])).toEqual([]);
expect(compress(["a"])).toEqual(["a"]);
expect(compress(["a", "a", "a"])).toEqual(["a"]);
expect(
compress(["a", "a", "b", "b", "c", "a", "a", "d", "d", "d"])
).toEqual(["a", "b", "c", "a", "d"]);
});
});

describe("P09 - pack", () => {
it("packs consecutive duplicates into sublists", () => {
expect(pack([] as string[])).toEqual([]);
expect(pack(["a"])).toEqual([["a"]]);
expect(pack(["a", "a", "a"])).toEqual([["a", "a", "a"]]);
expect(
pack(["a", "a", "b", "b", "c", "a", "a", "d", "d", "d"])
).toEqual([["a", "a"], ["b", "b"], ["c"], ["a", "a"], ["d", "d", "d"]]);
});
});

describe("P10 - encode", () => {
it("run-length encodes the list", () => {
expect(encode([] as string[])).toEqual([]);
expect(encode(["a"])).toEqual([[1, "a"]]);
expect(encode(["a", "a", "a"])).toEqual([[3, "a"]]);

    const input = ["a", "a", "b", "b", "c", "a", "a", "d", "d", "d"];
    const expected: Array<[number, string]> = [
      [2, "a"],
      [2, "b"],
      [1, "c"],
      [2, "a"],
      [3, "d"],
    ];
    expect(encode(input)).toEqual(expected);

});

it("is consistent with pack (if you use pack inside encode)", () => {
const input = ["a", "a", "b", "b", "c"];
const packed = pack(input);
const encoded = encode(input);
expect(encoded.length).toBe(packed.length);
});
});
