
function designMaze() {

    addWall(10, 10, 1, 80);
}

function addWall(rowStart, columnStart, width, height) {
	for(var row = rowStart; row < (rowStart + width); row++) {
        for(var column = columnStart; column < (columnStart + height); column++) {
            world[row][column] = 1;
        }
    }
}