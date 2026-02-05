/**
* Скользящее окно - смотрим не на весь массив/строку сразу, а на их кусочек (окно) и двигаем это окно.
* Когда думаем о sliding window ? 
* - подмассив, подстрока 
* - непрерывный участок 
* - длина k
* - максимум / минимум / сумма / количество
* - за O(n), не O(n²)

* Два типа:
* 1) Фиксированное окно (Fixed size)
* - длина окна заранее известна (k)
* - классика: сумма, среднее, количество
* 2) Динамическое окно (Variable size)
* - окно расширяется и сжимается
* - часто с while
* - строки, условия, уникальные элементы
*/

/**
* Задача: Дан массив чисел и число k. Найти максимальную сумму подмассива длины k.
* Ответ: 9 → [5, 1, 3]
* Сложность: O(n) - добавляем 1 раз, удаляем 1 раз, нет вложенных циклов, линейное время.
* Пространственная сложность: O(1) - windowSum, maxSum, number, i, end это все простые числа (константные примитивы). 
* Даже если массив огромный — мы не создаём структуры, зависящие от n.
*/
const nums = [2, 1, 5, 1, 3, 2];
function maxSubarraySum(arr, k = 3) {
  let maxSum = 0;
  let windowSum = 0;
  
  // считаем первое окно
  for(let i = 0; i < k; i++) {
    windowSum += arr[i]
  }

  maxSum = windowSum;
  // двигаем окно
  for(let end = k; end < arr.length; end++) {
    windowSum += arr[end] // 8 + 1 = 9
    windowSum -= arr[end - k] // 9 - 2 = 7 
    maxSum = Math.max(maxSum, windowSum);
   }
  return maxSum;
}

/**
* Задача: Найти максимальную последовательность гласных в подстроке k и вернуть число. 
* Ответ: 3 → iii
* Сложность: 
* Пространственная сложность:
*/ 
const string = "abciiidef"
function maxVowels(string, k = 3) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
  let count = 0;
  let maxCount = 0;
  
  for(let i = 0; i < k; i++) {
    if(vowels.has(string[i])){
      count++;
    }
  };

  maxCount = count;
  for(let end = k; end < string.length; end++) {
   if(vowels.has(string[end])){
     count++;
   }
    
   if(vowels.has(string[end - k])){
    count--;
   }
    maxCount = Math.max(maxCount, count);
  }
  
  return maxCount; 
}
