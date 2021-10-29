import React from 'react';

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key))

  if (savedValue) return savedValue

  // to make it possible to use function as a default value - make it work like React.useState()
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(() => {
    return getSavedValue(key, initialValue)
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  // what hook exposes are two values (state, and updating state function)
  // as component calls setValue via the name of updating function (what we destructure when calling useLocalStorage)
  // value is changing and therefore triggers useEffect
  // which setItem to local storage
  return [value, setValue]
}
