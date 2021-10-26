import * as React from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    setItems(getItems(0.14159))
    console.log("Updating items")
  }, [getItems])

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}

export const UseCallback = () => {
  const [number, setNumber] = React.useState(1)
  const [dark, setDark] = React.useState(false)

  // this function is being recreated evert time we render "UseCallback" component
  // therefore getItems prop of List component is changing
  // therefore useEffect of List is running even though we only clicking button that changes the theme
  // result: changing theme is causing running useEffect of List unnecessarily

  // const getItems2 = () => {
  //   return [number, number + 1, number + 2]
  // }

  // now using useCallback the function is being recreated only when when number changes
  // useCallback only recreates getItems function when number changes

  // if we have useMemo() instead useCallback(), we would get just the array
  // with useCallback getItems is being set to entire function, not just return value of that function
  // which allows us to use the function later in our app (eg. List component useEffect)
  // that allows us to pass parameter to the function (eg. incrementor)
  const getItems = React.useCallback(
    (incrementor) => {
      return [number + incrementor, number + incrementor + 1, number + incrementor + 2]
    },
    [number]
  )

  const theme = {
    height: "70vh",
    margin: "100px",
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  )
}
