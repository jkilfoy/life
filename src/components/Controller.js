import { useContext, useReducer } from "react";
import { ConfigContext, WorldContext } from "../context/ConfigContext";


export const Controller = (initialValues) => {
    const { interval, setInterval, width, setWidth, 
        height, setHeight, cellSize, setCellSize,
        barrierSize, setBarrierSize, colors, setColors } = useContext(ConfigContext);


    return (
        <div>Hope hope hope hope
        
        </div>
    )
}