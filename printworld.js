
function printWorld() {

    var worldTable, rowStart, rowEnd, columnStart, columnEnd;

    for(var i=0; i<numPlayers; i++) {


        rowStart = youAreHere[i][0] - mapRadius;
        rowEnd = youAreHere[i][0] + mapRadius + 1;

        if(rowStart < 0) {
            rowStart = 0;
            rowEnd = (mapRadius * 2) + 1;
        }

        if(rowEnd > worldRows) {
            rowStart = worldRows - (mapRadius * 2) - 1;
            rowEnd = worldRows;
        }

        columnStart = youAreHere[i][1] - mapRadius;
        columnEnd = youAreHere[i][1] + mapRadius + 1;

        if(columnStart < 0) {
            columnStart = 0;
            columnEnd = (mapRadius * 2) + 1;
        }

        if(columnEnd > worldColumns) {
            columnStart = worldColumns - (mapRadius * 2) - 1;
            columnEnd = worldColumns;
        }

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
