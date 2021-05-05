import React, { useContext } from 'react';

import {
    Counter
} from 'components';

import {
    CounterContext
} from 'contexts/CounterContext';

export const CounterContainer = () => {
    const { 
        count,
        add,
        subtract,
    } = useContext(CounterContext);

    return (
        <Counter
            onDecrement={subtract}
            onIncrement={add}
            value={count}
        />
    );
}