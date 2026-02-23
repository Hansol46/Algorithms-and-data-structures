/**
* BFS (поиск в ширину):    
* Использует очередь.
* Обходит все соседние узлы перед тем, как переходить дальше.
* Полезен для поиска кратчайшего пути.

*      ищем кратчайший путь (в невзвешенном графе) 
*      A -- B -- C
*      |    |
*      D -- E
*/
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D']
};
function breadthSearch(graph, start, target) {
  const queue = [[start]];
  const visited = new Set();
        
  while(queue.length > 0) {
   const path = queue.shift();
   const currentNode = path[path.length - 1];

   if(!visited.has(currentNode)){
     if(currentNode === target) return path;

     visited.add(currentNode);

     for(let neighbor of graph[currentNode]) { 
       if(!visited.has(neighbor)) {
         queue.push([...path, neighbor]) 
       }
     }
   }
  }
 return null; 
};

/**
* Shortest path in grid
* Нужно вернуть минимальное количество шагов от S до T
* Алгоритмическая сложность: O(n**2)
* Пространственная сложность: O(n**2)
*/
const grid = [
  ['S','0','0'],
  ['0','X','0'],
  ['0','0','T']
]
function findShortPath(grid) {
    let startRow = 0;
    let startColumn = 0;
    
    // Находим S
    for(let r = 0; r < grid.length; r++){
        for(let c = 0; c < grid[0].length; c++){
            if(grid[r][c] === "S") {
                startRow = r;
                startColumn = c;
            }
        }
    }
    
    const queue = [[startRow, startColumn, 0]];
    const visited = new Set([`${startRow},${startColumn}`]);
    const directions = [
        [1,0], // up
        [-1,0], // down
        [0,1], // right
        [0,-1] // left
    ]
    
    while(queue.length > 0) {
        const [row, column, steps] = queue.shift();
        
        if(grid[row][column] === "T"){
            return steps;
        };

        for(const [directionRow, directionColumn] of directions) {
            const newRow = directionRow + row;
            const newColumn = directionColumn + column;

            const currentPath = `${newRow},${newColumn}`;
            if(
                newRow >= 0 && 
                newColumn >= 0 &&
                newRow < grid.length &&
                newColumn < grid[0].length &&
                grid[newRow][newColumn] !== "X" && 
                !visited.has(currentPath)
            ) {
                visited.add(currentPath);
                queue.push([newRow,newColumn,steps+1]);
            }
        }
    }
    return -1;
}
