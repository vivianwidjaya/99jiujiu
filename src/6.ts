// 6. Find out whether a list is a palindrome.
export function isPalindrome(list: any[]): boolean {
  let reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  for (let k in list) {
    if (list[k] !== reversedList[k]) {
      return false;
    }
  }
  return true;
}
