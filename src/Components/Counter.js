import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount} from '../store/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <hr></hr>
        <button
        aria-label="Increment by 10"
        onClick={() => dispatch(incrementByAmount({val:10,val2:2000}))}
      >
        Increment By 2000
      </button>
      </div>
    </div>
  )
}
export default Counter;