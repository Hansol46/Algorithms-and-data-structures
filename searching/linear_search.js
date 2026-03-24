const array = [15, 4, 5, 8, 5, 11, 2, 7, 5, 12, 44];

/**
 * Сложность алгоритма: O(n), 
 * где n - количество элементов в массиве.
 * (для массива из 10 элементов будет 10 операций, для массива из 1000 элементов - 1000 операций)
 */
const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;
};

/**
* Простейшая функция RLE(Run-Length Encoding)
*/
function rle(string) {
  const result = [];
  let lastChar = string[0]
  let lastPos = 1; 

  for(let i = 1; i < string.length; i++) {
     if(string[i] != lastChar) {
       result.push(lastChar + lastPos);
       lastChar = string[i];
       lastPos = 1;
     } else { 
      lastPos ++;
     }
  }

  result.push(lastChar + lastPos)
  return result.join("") 
}
console.log(rle('AAABBCDDEEEFFAAAAA')) // "A3B2C1D2E3F2A5"
