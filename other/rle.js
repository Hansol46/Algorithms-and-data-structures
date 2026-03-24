/**
* Простейшая функция RLE(Run-Length Encoding)
* Сложность: O(n)
* Память: O(n)
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
