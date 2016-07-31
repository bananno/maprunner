
window.onload = function() {

    // variables/preferences
    worldRows    = 19;
    worldColumns = 19;
    jumpSize     = 1;
    mapRadius    = 7;
    numPlayers   = 2;
    mapDiameter  = (mapRadius * 2); // do not change

    youAreHere   = [];
    worldBox     = [];

    if(mapRadius >= (worldRows / 2)){
        mapRadius = Math.floor(worldRows / 2);
    }
    
    if(worldRows % 2 != 0)  {
        mapDiameter += 1;
    }

    // initialize

    for(var i=0; i<numPlayers; i++) {
        youAreHere[i] = [0, 0];
    }

    youAreHere[0] = [8, 9];
    youAreHere[1] = [8, 10];

    mainBox = document.getElementById("mainBox");

    document.onkeydown = useKeyboard;

    // create the board and add obstacles/features

    createWorld();
    designMaze();

    // begin

    // welcome();
    beginGame();
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
