
function printWorld() {

    var worldTable, rowStart, rowEnd, colStart, columnEnd;

    for(var i=0; i<numPlayers; i++) {

        rowStart = youAreHere[i][0] - mapRadius;

        if(rowStart < 0) {
            rowStart = 0;
        }

        if((rowStart + mapDiameter) > worldRows) {
            rowStart = worldRows - mapDiameter;
        }

        colStart = youAreHere[i][1] - mapRadius;

        if(colStart < 0) {
            colStart = 0;
        }

        if((colStart + mapDiameter) > worldColumns) {
            colStart = worldColumns - mapDiameter;
        }

        worldTable = "<table id='worldGrid'>"; 

        for(var thisRow = rowStart; thisRow < (rowStart + mapDiameter); thisRow++) {

            worldTable += "<tr>";

            for(var thisCol = colStart; thisCol < (colStart + mapDiameter); thisCol++) {

                worldTable += "<td class='world " + tile_class(thisRow, thisCol) + "'>" +
                tile_content(thisRow, thisCol) +
                "</td>"
            }

            worldTable += "</tr>";
        }

        worldTable += "</table>";

        worldBox[i].innerHTML = worldTable;
    }
}

function tile_class(row, column) {

    return "num" + world[row][column];
}

function tile_content(row, column) {

    for(var i=0; i<numPlayers; i++) {
        if(row == youAreHere[i][0] && column == youAreHere[i][1])
            return "<img class='player num" + i + "'>";
    }

    return "";
}
