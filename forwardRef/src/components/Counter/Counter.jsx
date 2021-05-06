import React from 'react'

export const Counter = React.forwardRef(({
  onIncrement,
  onDecrement,
  value = 0,
}, ref) => {
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={onIncrement}
        >
          Increment
        </button>
        <div ref={ref}>{value}</div>
        <button
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  )
});
