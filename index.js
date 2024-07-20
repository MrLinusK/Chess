const board = document.getElementById("board")


for (let x = 1; x < 9; x+=1) {
    const row = document.createElement(`div`)
    row.className = "row"
    row.id = `row_${x}`

    for (let collum = 0; collum < 8; collum+=1) {
        let tile = document.createElement('div')
        tile.className = "tile"
        tile.id = `tile_${collum}`

        row.appendChild(tile)
    }

    board.appendChild(row)

}