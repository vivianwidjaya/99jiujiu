// 3. Find the K'th element of a list (1-based index).
export function elementAt(list: any[], k: number): any {
  if (k > 0 && k <= list.length) {
    return list[k - 1];
  } else {
    throw new Error("k is out of bounds");
  }
}
