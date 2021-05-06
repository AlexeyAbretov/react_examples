import { Counter } from 'components';
import React, { useEffect, useReducer, useState } from 'react'

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

export const CounterChangeBgViaStateContainer = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useReducer(countReducer, initialCount);
    const [bg, setBg] = useState('transparent');
    const btnRef = React.createRef();

    const add = () => {
        setCount({ type: 'ADD', step });
        setBg('green');
        setTimeout(() => {
            setBg('transparent')
        }, 300);
    };

    const subtract = () => {
        setCount({ type: 'SUBTRACT', step });
        setBg('red');
        setTimeout(() => {
            setBg('transparent')
        }, 300);
    }

    return (
        <Counter
            ref={btnRef}
            onDecrement={subtract}
            onIncrement={add}
            value={count}
            valueProps={{
                bg,
                transition: 'background-color .3s'
            }}
        />
    );
}