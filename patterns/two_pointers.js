/**
* Two pointers - указатели двигаеются на встречу друг другу или по условию.
* Когда думаем про two pointers ?
* - Массив отсортирован
* - Нужно найти пару
* - Нужно сравнить начало и конец
* - Нужно сжать пространство поиска

* Template: 
* let left = 0;
* let right = arr.length - 1;
*
* while (left < right) {
*   if (условие выполнено) {
*     // делаем что нужно
*   }
* 
*   if (что-то меньше) {
*     left++;
*   } else {
*     right--;
*   }
* }
*/ 

/**
* Алгоритмическая сложность: O(n)
* Пространственная сложность: O(1)
*/
function isPalindrome(string){
  let left = 0;
  let right = string.length - 1;

  while(left < right) {
    if(string[left] !== string[right]){
      return false;
    }
    left++;
    right--;
  }
  return true
}

const arr = [1,2,4,6,10]
/**
* Алгоритмическая сложность: O(n)
* Пространственная сложность: O(1)
*/
function twoSum(arr, target = 8){
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    const sum = arr[left] + arr[right];
    
    if(sum === target) {
      return [left, right]
    }

    if(sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
