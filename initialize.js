
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

    addWall(10, 10, 1, 80, "top");

    // begin

    welcome();
};

function createWorld(){
    world = [];

    for(var row = 0; row < worldRows; row++) {
        world[row] = [];

        for(var column = 0; column < worldColumns; column++)   {
            world[row][column] = {
                terrain: 0,
                obstacle: {
                    top: false,
                    bottom: false,
                    left: false,
                    right: false
                }
            };
        }
    }
}

function addWall(rowStart, columnStart, rowSize, columnSize, side) {
   for(var row = rowStart; row < (rowStart + rowSize); row++) {
        for(var column = columnStart; column < (columnStart + columnSize); column++) {
            world[row][column].terrain = 1;

            world[row][column].obstacle[side] = 1;
        }
    }
}

function welcome() {
    var welcomePage = "<p style='padding-top:200px; text-align:center;'>" +
        "<input type='button' value='Begin Game' onclick=printWorld()>" +
        "</p>";

    worldBox.innerHTML = welcomePage;
}
