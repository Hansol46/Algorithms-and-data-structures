/**
* Monotonic stack - Мы храним стек так, чтобы он был: либо монотонно убывающий, либо монотонно возрастающий. 
* И благодаря этому каждый элемент: кладётся в стек один раз, вынимается один раз.
* Сложность: O(n)
*/

/**
* Next Greater Element. Для каждого числа найти первое большее справа
* Oтвет: [4,2,4,-1,-1]
* Алгоритмическая сложность: O(n)
* Пространственная сложность: O(n)
*/
const nums = [2,1,2,4,3];
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // храним индексы

  for(let i = 0; i < nums.length; i++) {
    while(stack.length && nums[i] > nums[stack.at(-1)]){
      const index = stack.pop();
      result[index] = nums[i]
    }
    stack.push(i);
  }
  return result;
}

/**
* Daily Temperatures. Для каждого дня через сколько дней будет теплее
* Ответ: [1,1,4,2,1,1,0,0]
*/
const temps = [73,74,75,71,69,72,76,73];
function dailyTemperatures(temps) {
  const result = new Array(temps.length).fill(0);
  const stack = [];

  for(let i = 0; i < temps.length; i++) {
    while(stack.length && temps[i] > temps[stack.at(-1)]){
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i)
  }
  return result;
}

/**
* Next Smaller Element to the Right. Для каждого элемента найти первый меньший справа.
* Oтвет: [2,1,1,-1,-1]
*/
const nums = [5,2,6,1,3];
function nextSmallerElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // храним индексы

  for(let i = 0; i < nums.length; i++) {
    while(stack.length && nums[i] < nums[stack.at(-1)]){
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
