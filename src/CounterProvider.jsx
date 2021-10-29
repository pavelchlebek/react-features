import * as React from 'react';

const CounterContext = React.createContext({
  number: 0,
  increment: () => {},
  decrement: () => {},
})

export const useNumber = () => {
  return React.useContext(CounterContext)
}

export const CounterProvider = ({ children }) => {
  const [number, setNumber] = React.useState(0)

  const increment = () => {
    setNumber((prev) => prev + 1)
  }

  const decrement = () => {
    setNumber((prev) => prev - 1)
  }

  return (
    <CounterContext.Provider value={{ number, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}
