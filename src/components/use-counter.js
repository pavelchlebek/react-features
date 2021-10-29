import React from 'react';

export const useCounter = (forwards) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const identifier = setTimeout(() => {
      if (forwards) {
        if (count > 10) {
          return
        } else {
          setCount((prev) => prev + 0.1)
        }
      } else {
        setCount((prev) => prev - 0.1)
      }
    }, 100)

    return () => clearTimeout(identifier)
  }, [count, forwards])

  return count.toFixed(1)
}
