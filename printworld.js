
function printWorld() {
    for(var i=0; i<numPlayers; i++) {

        var worldTable = "<table id='worldGrid'>" +
            world.map(row_mapper).join("") +
            "</table>";

        worldBox[i].innerHTML = worldTable;
    }
}

function row_mapper(array, row) {
    return "<tr>" + array.map(tile_mapper).join("") + "</tr>";

    function tile_mapper(tile, column) {

        return "<td class='world " + tile_class(row, column) + "'></td>";
    }
}

function tile_class(row, column) {

    for(var i=0; i<numPlayers; i++) {
        if(row == youAreHere[i][0] && column == youAreHere[i][1])
            return "player num" + i;
    }

    return "space num" + world[row][column];
}
