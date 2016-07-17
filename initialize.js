
window.onload = function() {

    // variables/preferences

    worldRows = 80;
    worldColumns = 150;
    jumpSize = 1;

    // initialize

    youAreHere = [[2, 2], [4, 4]];

    worldBox = document.getElementById("worldBox");

    document.onkeydown = useKeyboard;

    // create the board and add obstacles/features

    createWorld();

    addWall(10, 10, 1, 80);

    // begin

    printWorld();
};

function createWorld(){
    world = [];

    for(var row = 0; row < worldRows; row++) {
        world[row] = [];

        for(var column = 0; column < worldColumns; column++)   {
            world[row][column] = 0;
        }
    }
}

function addWall(rowStart, columnStart, rowSize, columnSize) {
   for(var row = rowStart; row < (rowStart + rowSize); row++) {
        for(var column = columnStart; column < (columnStart + columnSize); column++) {
            world[row][column] = 1;
        }
    }
}
