//problem statement: Finding ways in grid (2-d matrix)
//Given 2-dimensional board of size mxn, need to get number ways possible from position (0,0) to (m-1, n-1)
//board can be visualized as a 2-d matrix

//3x3 (0,0) => (2,2)
//(i, j) => (2, 0) => (2, 2)

let gridWays = (m, n, i = 0, j = 0,  cnt = 0) => {
    console.log(`current position (${i}, ${j})`)
    if (i == m - 1 && j == n - 1) {
        console.log(`path found!! reached the grid end position ${i}, ${j}`);
        return 1;
    }
    if (i == m || j == n) {
        return 0;
    }
    return gridWays(m, n, i + 1, j, cnt) + gridWays(m, n, i, j + 1, cnt);
}


console.log(gridWays(3, 3));