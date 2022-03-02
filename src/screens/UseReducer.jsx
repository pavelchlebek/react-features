// @ts-nocheck
import React from 'react';

const initialState = { count: 0 }

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    default:
      throw new Error({ message: "Invalid action type!" })
  }
}

export const UseReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT }) // do not know why dispatch() expects 0 args instead of action object
  }

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  return (
    <div style={{ margin: "150px" }}>
      <button onClick={decrement}>-</button>
      <span style={{ padding: "20px" }}>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Press and it will fuck up!</button>
    </div>
  )
}
