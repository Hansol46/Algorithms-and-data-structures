/**
* Динамическое скользящее окно - в отличие от обычного скользящего окна, тут мы двигаем окно только когда это необходимо
* Template: 
* let left = 0;
* for (let right = 0; right < n; right++) {
*  // расширяем окно
*  while (condition is broken) {
*    // сжимаем окно
*    left++;
*  }
*  // обновляем ответ
* }
*/ 

/**
* Задача: Найти длину самой длинной подстроки без повторяющихся символов
* Ответ: 
* "abcabcbb" → 3 ("abc") 
* "bbbbb" → 1 ("b") 
* "pwwkew" → 3 ("wke")
* Алгоритмическая сложность: O(n)
* Пространственная сложность: O(min(n, alphabet)) максимум:
* - либо длина строки n
* - либо размер алфавита (например, 26 букв)
*/ 
const string = 'abcabcbb;
function lengthOrLongestSubstring(string) {
  let seen = new Set();  
  let left = 0;
  let maxLen = 0;

  for(let right = 0; right < string.length; right++) {
    while(seen.has(string[right])) {
      seen.delete(string[left]);
      left++;
    }
    seen.add(string[right]);
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen;
}

/**
* Задача: Longest Substring with At Most 2 Distinct Characters
* Ответ: "eceba" → 3 ("ece") 
* Сложность алгоритма:
* Пространственная сложность: 
*/
const string = "eceba";
function longestSubstring(string){
  const map = new Map();
  let left = 0;
  let maxLenth = 0; 

  for(let right = 0; right < string.length; right++) {
    // расширяем окно
    map.set(string[right], (map.get(string[right]) || 0) + 1);
    
    while(map.size > 2){
      map.set(string[left], map.get(string[left]) - 1);
      if(map.get(string[left]) === 0) {
        map.delete(string[left]);
      }
      left++;
    }
    
    maxLengh = Math.max(maxLength, right - left + 1)
  }
  return maxLenth
}

/**
* Задача: Minimum Size Subarray Sum
* Ответ: 2 ([4,3])
* Сложность алгоритма:
* Пространственная сложность: 
*/
const nums = [2,3,1,2,4,3]
function minSizeSubarraySum(array, target = 7){
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  
  for(let right = 0; right < array.length; right++){
    sum += string[right];
    
    while(sum >= target) {
      minLen = Math.min(minLen, right - left + 1);  
      sum -= string[left]
      left++;
    }
    
  }
  
  return minLen === Infinity ? 0 : minLen;
}
