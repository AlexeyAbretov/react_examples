import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from '../components/Counter';
import { decrement, increment } from '../store/reducer';

export const CounterContainer = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return <Counter
    value={count}
    onDecrement={() => dispatch(decrement())}
    onIncrement={() => dispatch(increment())}
  />
}
