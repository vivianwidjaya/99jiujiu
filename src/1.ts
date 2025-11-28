// 1. Find the last element of a list.
export function myLast(list: any[]): any {
  // TODO: implement
  if (list.length > 0) {
    return list[list.length - 1];
  } else {
    throw new Error("list is empty");
  }
}
