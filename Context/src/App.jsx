import React, { useReducer } from 'react';

import { Box } from 'ui';

import {
    CounterContainer,
} from 'containers';

import {
    CounterContext
} from 'contexts/CounterContext';

const countReducer = (state, dispatch) => {
    const { type, step } = dispatch;
    switch (type) {
        case 'ADD': {
            return state + step;
        }
        case 'SUBTRACT': {
            return state - step;
        }
        default: {
            return state;
        }
    }
}

export const App = () => {
    const [count, setCount] = useReducer(countReducer, 0);
    const add = () => setCount({ type: 'ADD', step: 1 });
    const subtract = () => setCount({ type: 'SUBTRACT', step: 1 });

    return (
        <CounterContext.Provider value={{ count, add, subtract }}>
            <Box>
                <CounterContainer />
            </Box>
        </CounterContext.Provider>
    );
}