import React from 'react'
import { Box } from 'ui';

export const Counter = React.forwardRef(({
  onIncrement,
  onDecrement,
  value = 0,
  valueProps = {},
  children,
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
        <Box ref={ref} {...valueProps || {}}>{value}</Box>
        <button
          aria-label="Decrement value"
          onClick={onDecrement}
        >
          Decrement
        </button>
      </div>
      {children}
    </div>
  )
});
