
function printWorld() {

    var worldTable, rowStart, rowEnd, columnStart, columnEnd;

    for(var i=0; i<numPlayers; i++) {

        rowStart = 0;
        rowEnd = worldRows;
        columnStart = 0;
        columnEnd = worldColumns;

        worldTable = "<table id='worldGrid'>";

        for(var thisRow = rowStart; thisRow < rowEnd; thisRow++) {

            worldTable += "<tr>";

            for(var thisColumn = columnStart; thisColumn < columnEnd; thisColumn++) {

                worldTable += "<td class='world " + tile_class(thisRow, thisColumn) + "'></td>"
            }

            worldTable += "</tr>";
        }

        worldTable += "</table>";

        worldBox[i].innerHTML = worldTable;
    }
}

function tile_class(row, column) {

    for(var i=0; i<numPlayers; i++) {
        if(row == youAreHere[i][0] && column == youAreHere[i][1])
            return "player num" + i;
    }

    return "space num" + world[row][column];
}
