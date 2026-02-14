/**
* Prefix sum - особый подход, чтобы можно было посчитать накопленные суммы.
* Пример:
* nums:   [3, 2, 4, 1, 5]
* prefix: [3, 5, 9, 10, 15]
*   getSum(1,3) = prefix[3] - prefix[1 - 1] = 7

* Также prefix sum нужен для поиска подмассивов с заданной суммой
* Пример дан массив [1, 2, 3], нужно посчитать сколько подмассивов имеют сумму k, k = 3.
* Ответ: [1,2], [3] - 2 подмассива

* Template: 
* 1️⃣ currentSum += nums[i]
* 2️⃣ если map содержит (currentSum - k)
*      count += map[currentSum - k]
* 3️⃣ map[currentSum]++
*/ 

/**
* Найти количество подмассивов, сумма которых равна k
* Ответ: [1,2], [2,1], [1,2], [2,1] - 4
* Алгоритмическая сложность: O(n)
* Пространственная сложность: O(n)
*/
const arr = [1,2,1,2,1]
function maxSumSubarray(arr,k = 3) { 
  let currentSum = 0;  
  const map = { 0: 1 }; 
  let count = 0; 
  
  for(let num of arr) { 
    currentSum += num; 
    if(map[currentSum - k]){
       count += map[currentSum - k] 
    } 
    
    map[currentSum] = (map[currentSum] || 0 ) + 1; 
  } 
  return count 
};

/**
* Subarray Divisible by K
* Алгоритмическая сложность: O(n)
* Пространственная сложность: O(1)
*/
const arr = [4,5,0,-2,-3,1]
function subarrayDevideByK(arr, k = 5) {
  let count = 0;
  let map = {0: 1}
  let currentSum = 0;
  for(let i = 0; i < arr.length; i++){
    currentSum += arr[i];
    let key = currentSum % k
    if(key < 0) {
      key += k
    }
    if(map[key]) {
      count += map[key];
    }
    map[key] = (map[key] || 0) + 1
  }
  return count;
}
