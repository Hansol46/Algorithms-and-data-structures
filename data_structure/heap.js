/**
* Heap - это структура данных, которая обычно хранится в массиве.
* Min Heap → минимальный элемент сверху
* Max Heap → максимальный элемент сверху
* Операции: 
* insert → O(log n)
* remove top → O(log n)
* peek → O(1)
*/ 

/**
* Можно реализовать heap через класс.
*/ 
class Heap {
  constructor(){
    this.heap = [];
  }

  push(value){
    this.heap.push(value);
    this.heap.sort((a,b) => a - b)
  }

  pop(){
    return this.heap.shift();
  }
  
  size(){
    return this.heap.length
  }
}
