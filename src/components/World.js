import { useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";
import { useIncrement } from "../hooks/useIncrement";
import Cell from "./Cell";

export const World = () => {
    const {interval, width, height, cellSize, barrierSize, colors} = useContext(ConfigContext);
    let increment = useIncrement(interval);

    // build the world grid
    let world = [];
    let i = 0;
    for (let col = 0; col < height; col++) {
        world.push([])
        for (let row = 0; row < width; row++) {
            let x = col * cellSize + (col + 1) * barrierSize
            let y = row * cellSize + (row + 1) * barrierSize
            world[col].push({
                x: x, y: y,
                status: 'EMPTY',
                size: cellSize,
                key: i
            });
            i++;
        }
    }    

    return (
        <div className="world">
            {world.map(row => 
                row.map(cell => {
                    return <Cell x={cell.x} y={cell.y}
                            width={cell.size}
                            height={cell.size}
                            status={cell.status}
                            key={cell.key} />;
                })
            )}
        </div>
    );
}