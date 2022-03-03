// @ts-nocheck
import React from 'react';

import c from './Calculator.module.css';
import { DigitButton } from './DigitButton';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    default:
      return state
  }
}

export const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = React.useReducer(reducer, {})

  return (
    <div className={c.body}>
      <div className={c.calculatorGrid}>
        <div className={c.output}>
          <div className={c.previousOperand}>
            {previousOperand} {operation}
          </div>
          <div className={c.currentOperand}>{currentOperand}</div>
        </div>
        <button className={c.spanTwo}>AC</button>
        <button>DEL</button>

        <button>÷</button>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button>*</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button>+</button>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button>-</button>
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <button className={c.spanTwo}>=</button>
      </div>
    </div>
  )
}
