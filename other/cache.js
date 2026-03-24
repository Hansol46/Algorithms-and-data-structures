/**
* Базовая функция кэширования. 
*/ 
function cashFunction(fn){
  const map = new Map();
  
  return function(...args) {
   const key = JSON.stringify(args);
   if(map.has(key)) {
     return map.get(key);
   }
   
   const result = fn.apply(this, args);
   map.set(key, result);
   return result;
  }
}

/**
* Example
*/ 
function factorial(n) {
  let result = 1;
  while(n != 1) {
    result *= n;
    n -= 1
  }
  return result
}

const cachedFactorial = cashFunction(factorial)
console.log(cachedFactorial(5)); // 120 (вычисляется)
console.log(cachedFactorial(5)); // 120 (берется из кэша)
console.log(cachedFactorial(6)); // 720 (вычисляется)
console.log(cachedFactorial(6)); // 720 (берется из кэша)
