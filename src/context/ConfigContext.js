import React from "react";


export const ConfigContext = React.createContext({
    interval: 1000,
    width: 10,
    height: 10,
    barrierSize: 10,
    colors: {
        'ALIVE': 'green',
        'DEAD': 'gray',
        'EMPTY': 'white'
    }
});