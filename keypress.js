
var newPosition;

function useKeyboard(keyPressed) {
    var keyPressed = (window.event ? window.event : keyPressed).keyCode;

    // console.log(keyPressed);

    if (keyPressed == 38){
        movePlayer(0, 0, -1);
    }
    if (keyPressed == 40){
        movePlayer(0, 0, 1);
    }
    if (keyPressed == 39){
        movePlayer(0, 1, 1);
    }
    if (keyPressed == 37){
        movePlayer(0, 1, -1);
    }

    if (keyPressed == 83 || keyPressed == 68){
        movePlayer(1, 0, -1);
    }
    if (keyPressed == 88){
        movePlayer(1, 0, 1);
    }
    if (keyPressed == 67){
        movePlayer(1, 1, 1);
    }
    if (keyPressed == 90){
        movePlayer(1, 1, -1);
    }
}

function movePlayer(playerNumber, vertHort, direction) {

    direction *= jumpSize;

    newPosition = youAreHere[playerNumber].concat();

    newPosition[vertHort] += direction;

    wrapWorld(newPosition[0], newPosition[1]);

    if(!isLegal(newPosition[0], newPosition[1])) {
        return;
    }

    youAreHere[playerNumber] = newPosition.concat();

    printWorld();
}

function wrapWorld(newRow, newCol) {

    // if the new space is off the board, loop around and check that space instead

    if(newRow < 0) {
        newRow = worldRows - 1;
    }

    if(newRow >= worldRows) {
        newRow = 0;
    }

    if(newCol < 0) {
        newCol = worldColumns - 1;
    }

    if(newCol >= worldColumns) {
        newCol = 0;
    }

    newPosition = [newRow, newCol];
}

function isLegal(newRow, newCol) {

    // make sure the new space is not occupied by another player

    for(var i=0; i<youAreHere.length; i++) {

        if(youAreHere[i][0] == newRow && youAreHere[i][1] == newCol) {
            return false;
        }
    }

    // make sure the new space is not an "obstacle"

    if(world[newRow][newCol] == 1) {
        return false;
    }

    // no errors found, so the move must be legal

    return true;
}
