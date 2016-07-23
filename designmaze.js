
function designMaze() {

    addWall(10, 10, 1, 80);
}

function addWall(rowStart, columnStart, rowSize, columnSize) {
   for(var row = rowStart; row < (rowStart + rowSize); row++) {
        for(var column = columnStart; column < (columnStart + columnSize); column++) {
            world[row][column] = 1;
        }
    }
}