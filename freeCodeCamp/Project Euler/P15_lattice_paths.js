function latticePaths(gridSize) {
    let grid = new Array(gridSize);

    for(let j = 0; j < gridSize; j++ ) {
        grid[j] = new Array();
        for( let i = 0; i < gridSize; i++) {
            grid[j].push(0);
        }
        console.log(grid);
    }
    
    return true;
}

latticePaths(4);
