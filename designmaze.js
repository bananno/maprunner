
function designMaze() {

    // Outter border
    addWall(0, 0, 1, 19, 1);
    addWall(0, 0, 19, 1, 1);
    addWall(9, 0, 1, 1, 0);
    addWall(1, 18, 18, 1, 1);
    addWall(9, 18, 1, 1, 0);
	addWall(18, 0, 1, 18, 1);

    addWall(1, 9, 2, 1, 1);
    addWall(15, 9, 2, 1, 1);
    addWall(4, 7, 1, 5, 1);
    addWall(2, 5, 1, 3, 1);
    addWall(2, 2, 1, 2, 1);
    addWall(2, 11, 1, 3, 1);
    addWall(2, 15, 1, 2, 1);

    addWall(4, 2, 1, 2, 1);
    addWall(4, 15, 1, 2, 1);
    addWall(4, 5, 5, 1, 1);
    addWall(4, 13, 5, 1, 1);
    addWall(6, 6, 1, 2, 1);
    addWall(6, 11, 1, 2, 1);
    addWall(5, 9, 2, 1, 1);

    addWall(16, 2, 1, 6, 1);
    addWall(16, 11, 1, 6, 1);
    addWall(14, 7, 1, 5, 1);
    addWall(14, 5, 2, 1, 1);
    addWall(14, 13, 2, 1, 1);

    addWall(14, 1, 1, 1, 1);
    addWall(14, 17, 1, 1, 1);
    addWall(12, 3, 3, 1, 1);
    addWall(12, 15, 3, 1, 1);
    addWall(12, 2, 1, 1, 1);
    addWall(12, 16, 1, 1, 1);

    addWall(12, 5, 1, 3, 1);
    addWall(12, 11, 1, 3, 1);

    addWall(11, 9, 2, 1, 1);
    addWall(10, 7, 1, 5, 1);

    addWall(10, 2, 1, 4, 1);
    addWall(10, 13, 1, 4, 1);

    addWall(8, 7, 1 ,1 ,1);
    addWall(8, 11, 1 ,1 ,1);

    addWall(9, 3, 1 ,1 ,1);
    addWall(9, 15, 1 ,1 ,1);

    addWall(7, 3, 1 ,1 ,1);
    addWall(7, 15, 1 ,1 ,1);

    addWall(8, 1, 1 ,1 ,1);
    addWall(8, 17, 1 ,1 ,1);

    addWall(6, 2, 1 ,2 ,1);
    addWall(6, 15, 1 ,2 ,1);
}

function addWall(rowStart, columnStart, height, width, terrain){
   	if (terrain == null){
        terrain = 1;
   	}

   	if((rowStart + height) > worldRows){
        height = worldRows - rowStart;
   	}

   	if((columnStart + width) > worldColumns){
        width = worldColumns - columnStart;
   	}

   	for(var row = rowStart; row < (rowStart + height); row++){
    	for(var column = columnStart; column < (columnStart + width); column++){
        	world[row][column] = terrain;
     	}
 	}
}

