const array = [-4, 1, 11, 7, 3, 9, -1, 0, 5, 13]

/**
 * Сложность алгоритма: O(n*n), 
 * где n - количество элементов в массиве.
 */
function selectionSort(array){
 for(let i = 0; i < array.length; i++) {
   // Находим индекс минимального элемента в неотсортированной части
   let minIndex = i; 
   for(let j = i + 1; j < array.length; j++) { 
     if(array[j] < array[minIndex]) {
       minIndex = j
     }
   }
   
   if(minIndex !== i) {
     [array[i], array[minIndex]] = [array[minIndex], array[i]]
   }
 }
 return array;
}
