const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

/**
 * Важно: только в отсортированном массиве
 * Сложность алгоритма: O(logn), 
 * где n - количество элементов в массиве.
 * Для массива из 10 элементов понадобится примерно 4 итерации, для массива из 1000 элементов примерно 10.
 * Вернуть index 
 */
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

/**
* Задача: Найти первую позицию target
* nums = [1,2,2,2,3] target = 2
* Ответ: 1
*/
const nums = [1,2,2,2,3];
function binarySearchFindFirstPos(nums, target = 2) {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      index = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }
  
  return index;
};

/**
* Задача: Найти последнюю позицию target
* nums = [1,2,2,2,3] target = 2
* Ответ: 3
*/
const nums = [1,2,2,2,3];
function binarySearchFindLastPos(nums, target = 2) {
  let left = 0;
  let right = nums.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      index = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }
  
  return index;
};

/**
* Ищем и возвращаем [первая позиция, последняя позиция]
* Алгоритмическая сложность: O(logn) + O(logn) = O(logn)
* Пространственная сложность: O(1)
* Вводные данные: nums = [1,2,2,2,3], target = 2
* Ответ: [1,3]
*/ 
const nums = [1,2,2,2,3];
function searchRange(nums, target = 2){
  return [binarySearchFindFirstPos(nums,target),binarySearchFindLastPos(nums,target)]
}
