
window.onload = function() {

    // variables/preferences

    worldRows = 80;
    worldColumns = 150;
    jumpSize = 1;
    mapRadius = 5;

    numPlayers = 2;

    // initialize

    youAreHere = [];

    for(var i=0; i<numPlayers; i++) {
        youAreHere[i] = [0, 0];
    }

    youAreHere[0] = [2, 2];
    youAreHere[1] = [4, 4];

    mainBox = document.getElementById("mainBox");

    worldBox = [];

    document.onkeydown = useKeyboard;

    // create the board and add obstacles/features

    createWorld();

    addWall(10, 10, 1, 80);

    // begin

    welcome();
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

function welcome() {
    var welcomePage = "<p style='padding-top:200px; text-align:center;'>" +
        "<input type='button' value='Begin Game' onclick=beginGame()>" +
        "</p>";

    mainBox.innerHTML = welcomePage;
}

function beginGame() {
    var gameFrame = "";

    for(var i=0; i<numPlayers; i++) {
        gameFrame += "<td id='worldBox" + i + "'>";
    }

    mainBox.innerHTML = "<table>" + gameFrame + "</table>";

    for(var i=0; i<numPlayers; i++) {
        worldBox[i] = document.getElementById("worldBox" + i);
    }

    printWorld();
}
