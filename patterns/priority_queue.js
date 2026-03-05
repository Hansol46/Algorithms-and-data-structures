/**
*
*/

/**
* Kth Largest Element in Array
* nums = [3,2,1,5,6,4]
* k = 2
* Ответ: 5
* Алгоритмическая сложность: O(n log k)
*/
function findKthLargest(arr, k) {
  const heap = [];

  for(const el of arr) {
    heap.push(el);
    heap.sort((a,b) => a - b);

    if(heap.length > k) {
      heap.shift();
    }
  }

  return heap[0]
}

/**
* Top K Frequent Elements
* nums = [4,4,4,6,6,7]
* k = 1
* Ответ: 4
* Алгоритмическая сложность:
* O(n) - подсчет частоты
*/ 
function topKFrequent(arr, k) {
  const frequent = {}; // {4: 3, 6: 2, 7: 1}
  for(const el of arr) {
    frequent[el] = (frequent[el] || 0) + 1;
  }

  /**
  * [ 
  *   ["4", 3],
  *   ["6", 2], 
  *   ["7", 1],
  * ]
  */
  const sorted = Object.entiries(frequent).sort((a,b) => b[1] - a[1]);
  
  return sorted.slice(0, k).map((el) =>  Number(el[0]));
} 
