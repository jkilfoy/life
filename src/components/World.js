import Cell from "./Cell";

function World({size}) {
    
    let grid = [];
    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            grid.push({col: col, row: row});
        }
    }

    let cellSize = 100;
    let barrierSize = 10;

    return (
        <div className="world">
            {grid.map(pos => 
                <Cell col={pos.col} row={pos.row} 
                    size={cellSize} 
                    barrierSize={barrierSize}
                    key={pos.col + 'k' + pos.row}/>
            )}
        </div>
    );
}

export default World;