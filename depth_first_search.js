/**
 * DFS (поиск в глубину):    
 * Использует стек (или рекурсию).
 * Углубляется максимально в один путь, прежде чем вернуться назад.
 * Полезен для проверки связности или обхода всех возможных путей.
*/

/**
* Найти и вернуть кол-во островов
*/
const grid = [ 
  ['1','1','0'], 
  ['0','1','0'], 
  ['1','0','1'] 
];
function numsIsLand(grid) {
  let count = 0;
    
  function dfs(r,c){
      if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
          return;
      }
      
      grid[r][c] = '0';

      dfs(r + 1,c);
      dfs(r - 1,c);
      dfs(r,c + 1);
      dfs(r,c - 1);
  }

  for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[r].length; c++) {
          if(grid[r][c] === '1') {
              count++;
              dfs(r,c);
          }
      }
  }
  return count;  
}

/**
 *          A
 *         / \
 *        B   C
 *       / \   \
 *      D   E   F

 * Задача: Поиск пути в лабиринте
 *    0 — проходимая клетка.
 *    1 — стена.
 *    S — начальная точка.
 *    E — конечная точка.    
*/

const maze = [
    ['S', 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 'E']
];

function solveMaze(maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    // Направления движения: вверх, вниз, влево, вправо
    const directions = [
        [-1, 0], // вверх
        [1, 0],  // вниз
        [0, -1], // влево
        [0, 1]   // вправо
    ];

    // Поиск начальной точки
    let start = null;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (maze[r][c] === 'S') {
                start = [r, c];
                break;
            }
        }
    }

    if (!start) throw new Error("Start point not found");

    // Вспомогательная функция для проверки границ и препятствий
    function isValid(r, c) {
        return r >= 0 && r < rows && c >= 0 && c < cols && maze[r][c] !== 1;
    }

    // DFS рекурсивно
    function dfs(r, c, path) {
        // Если нашли конец
        if (maze[r][c] === 'E') {
            path.push([r, c]);
            return path;
        }

        // Помечаем текущую клетку как посещенную
        maze[r][c] = 1;

        // Перебираем все направления
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (isValid(nr, nc)) {
                const result = dfs(nr, nc, [...path, [r, c]]);
                if (result) return result; // Если путь найден, возвращаем его
            }
        }

        return null; // Если путь не найден
    }

    return dfs(start[0], start[1], []);
}

console.log(solveMaze(maze)); // [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2], [2, 3], [2, 4], [3, 4]]
