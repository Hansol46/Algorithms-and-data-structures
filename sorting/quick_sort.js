const array = [1,15,7,5,9,10,2,6,-4,0,-2,3, 19];

/**
 * Сложность алгоритма: O(n*log(n)), 
 * где n - количество элементов в массиве.
 */
function quickSort(array){
  if(array.length <= 1) {
    return array
  }
  
  const less = [];
  const more = []
  const middleIndex = Math.floor(array.length / 2);
  const midElement = array[middleIndex];
  
  for(let i = 0; i < array.length; i++){
    if(i === middleIndex) {
      continue;
    }
    if(array[i] < midElement) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  
  return [...quickSort(less), midElement, ...quickSort(more)]
}
