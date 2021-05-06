import { Counter } from 'components';
import React, { useReducer, useState } from 'react'
import { CSSTransition } from 'react-transition-group';

import './styles/transition.css';

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

export const CounterChangeBgViaCSSTransitionContainer = ({ initialCount = 0, step = 1 }) => {
    const [count, setCount] = useReducer(countReducer, initialCount);
    const [clicked, setClicked] = useState(false);

    const add = () => {
        setCount({ type: 'ADD', step });

        setClicked(true);

        // setTimeout(() => setClicked(false), 300);
    };

    const subtract = () => {
        setCount({ type: 'SUBTRACT', step });

        setClicked(true);

        // setTimeout(() => setClicked(false), 300);
    }

    return (
        <Counter
            onDecrement={subtract}
            onIncrement={add}
            value={count}
        >
            <CSSTransition 
                in={clicked}
                timeout={300}
                classNames="my-css"
                onEnter={() => setTimeout(() => setClicked(false), 300)}
            >
                <div>
                    {"Button was clicked!!!"}
                </div>
            </CSSTransition>
        </Counter>
    );
}