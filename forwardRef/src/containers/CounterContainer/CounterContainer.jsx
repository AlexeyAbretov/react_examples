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
    const add = () => {
        setCount({ type: 'ADD', step });
        btnRef.current.style.color = 'green';
    };
    const subtract = () => {
        setCount({ type: 'SUBTRACT', step });
        btnRef.current.style.color = 'red';
    }

    const btnRef = React.createRef();

    return (
        <Counter
            ref={btnRef}
            onDecrement={subtract}
            onIncrement={add}
            value={count}
        />
    );
}