import { Counter } from 'components';
import React, { useReducer } from 'react'

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

export const CounterContainer = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useReducer(countReducer, initialCount);
    const add = () => setCount({ type: 'ADD', step });
    const subtract = () => setCount({ type: 'SUBTRACT', step });

    return (
        <Counter
            onDecrement={subtract}
            onIncrement={add}
            value={count}
        />
    );
}