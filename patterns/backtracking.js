/**
* Backtraking - это перебор всех возможных вариантов через постоение по шагам, что позволяет ОТКАТИТЬ последний вариант, если он не подходит.
* Формально это некоторый вид DFS.
* Когда использовать:
* - «вернуть все комбинации»
* - «все перестановки»
* - «все подмножества»
* - «сгенерировать строки»
* - «найти все варианты, которые удовлетворяют условию»

* Template: 
* function backtrack(path, choices) {
*   if (baseCase) {
*     result.push([...path]);
*     return;
*   }
*
*   for (let choice of choices) {
*     if (!isValid(choice)) continue;
*      path.push(choice);
*      backtrack(path, newChoices);
*      path.pop();
*   }
* }
*/

/**
* Subsets 
* Input: [1,2]
* Output:
* []
* [1]
* [2]
* [1,2]
* Алгоритмическая сложность: O(2**n)
* Пространственная сложность: O(2**n)
*/
function subsets(nums) {
  const result = [];
  function backtrak(start, path) {
    result.push([...path]);
    for(let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0,[]);
  return result
}
