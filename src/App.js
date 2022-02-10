import { useContext, useReducer } from 'react';
import './App.css';
import { Controller } from './components/Controller';
import World from './components/World';
import { ConfigContext } from './context/ConfigContext';

let configReducer = (config, prop, newVal) => {
    config[prop] = newVal;
    return config;
}

function App() {
    // let config = useContext(ConfigContext);
    const [config, dispatch] = useReducer(configReducer, {});
    const configValues = {
        config: config,
        dispatch: dispatch
    };

    return (
        <ConfigContext.Provider value={configValues}>
            <Controller />
            <World size={16} />
        </ConfigContext.Provider>
    );
}

export default App;
