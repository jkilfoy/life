import Cell from "./Cell";

function World({size}) {
    
    let grid = [];
    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            grid.push({col: col, row: row});
        }
    }

    let barrierSize = 10;
    let cellWidth = (window.innerWidth - (size+1) * barrierSize) / size;    
    let cellHeight = (window.innerHeight - (size + 1) * barrierSize) / size; 
    let cellSize = Math.min(cellWidth, cellHeight);

    return (
        <div className="world">
            {grid.map(pos => {
                let x = pos.col * cellSize + (pos.col + 1) * barrierSize
                let y = pos.row * cellSize + (pos.row + 1) * barrierSize
                return <Cell x={x} y={y}
                    width={cellSize}
                    height={cellSize}
                    status={'alive'}
                    key={pos.col + 'k' + pos.row} />
            })}
        </div>
    );
}

export default World;