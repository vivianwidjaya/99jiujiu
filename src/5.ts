// 5. Reverse a list.
export function myReverse(list: any[]): any[] {
  let reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
}
