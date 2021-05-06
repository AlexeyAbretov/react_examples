import { Counter } from 'components';
import React, { useEffect, useReducer } from 'react'

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

export const CounterChangeBgViaRefContainer = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useReducer(countReducer, initialCount);
    const btnRef = React.createRef();

    const add = () => {
        setCount({ type: 'ADD', step });
        btnRef.current.style.backgroundColor = 'green';

        const ref = btnRef.current;
        setTimeout(() => {
            ref.style.backgroundColor = 'transparent';
            // ref = null;
        }, 300);
    };

    const subtract = () => {
        setCount({ type: 'SUBTRACT', step });
        btnRef.current.style.backgroundColor = 'red';
        const ref = btnRef.current;
        setTimeout(() => {
            ref.style.backgroundColor = 'transparent';
            // ref = null;
        }, 300);
    }

    useEffect(() => {
        btnRef.current.style.transition = 'background-color .3s'
    }, []);

    return (
        <Counter
            ref={btnRef}
            onDecrement={subtract}
            onIncrement={add}
            value={count}
        />
    );
}