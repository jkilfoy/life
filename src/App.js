import { useContext, useReducer, useState } from 'react';
import './App.css';
import { Controller } from './components/Controller';
import {World} from './components/World';
import { ConfigContext } from './context/ConfigContext';



function App() {
    const {interval, setInterval} = useState(1000);
    const {width, setWidth} = useState(20);
    const {height, setHeight} = useState(20);
    const {cellSize, setCellSize} = useState(20);
    const {barrierSize, setBarrierSize} = useState(20);
    const {colors, setColors} = useState({
        ALIVE: 'green',
        DEAD: 'gray',
        EMPTY: 'white'
    })

    return (
        <ConfigContext.Provider value={{interval, setInterval,
        width, setWidth, height, setHeight,
        cellSize, setCellSize,
        barrierSize, setBarrierSize,
        colors, setColors}}>
            <div>
                Howdy all
            </div>
            <Controller />
            <World />
        </ConfigContext.Provider>
    );
}

export default App;
