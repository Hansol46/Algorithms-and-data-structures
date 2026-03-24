const array = [5,1,2,3,4,9,8,6,7] 

/**
 * Сложность алгоритма: O(n*n), 
 * где n - количество элементов в массиве.
 */
function bubbleSort(array){
 for(let i = 0; i < array.length; i++) {
   for(let j = i + 1; j < array.length; j++){
     if(array[i] > array[j]) {
       [array[i], array[j]] = [array[j], array[i]]
     } 
   }
 }
}
