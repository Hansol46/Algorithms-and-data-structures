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
* Пространственная сложность: 
*/ 
const string = 'abcabcbb;
function lengthOrLongestSubstring(string) {
  let seen = new Set(); // c a b  
  let left = 0; // 2
  let maxLen = 0; // 3

  for(let right = 0; right < string.length; right++) {
    while(seen.has(string[right])) { // 4
      seen.delete(string[left]);
      left++;
    }
    seen.add(string[right]);
    maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen;
}
