
function printWorld() {
    var worldTable = "<table>" + world.map(row_mapper).join("") + "</table>";

    worldBox.innerHTML = worldTable;

    function row_mapper(array, row) {
        return "<tr>" + array.map(tile_mapper).join("") + "</tr>";

        function tile_mapper(tile, column) {

            return "<td class='world " + tile_class(row, column) + "'></td>";
        }
    }

    function tile_class(row, column) {

        if(row == youAreHere[0][0] && column == youAreHere[0][1])
            return "player0";

        if(row == youAreHere[1][0] && column == youAreHere[1][1])
            return "player1";

        return "type" + world[row][column];
    }
}
