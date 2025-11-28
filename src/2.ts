// 2. Find the last but one element of the list
export function myButLast(list: any[]): any {
  if (list.length > 2) {
    return list[list.length - 2];
  } else {
    throw new Error("Array length is lesser than 2");
  }
}
