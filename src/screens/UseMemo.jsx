import * as React from 'react';

export const UseMemo = () => {
  const [number, setNumber] = React.useState(0)
  const [dark, setDark] = React.useState(false)
  const doubleNumber = React.useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyles = React.useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    }
  }, [dark])

  // now (without themeStyles = React.useMemo()) useEffect will run on every render even though theme (dark) does not change
  // reason why: themeStyles is an object and they can be only equal by reference
  // so in this case themeStyles is never equal, means it has different value (reference) in every render

  // with themeStyles = React.useMemo(() => {}, [])
  React.useEffect(() => {
    console.log("Theme changed")
  }, [themeStyles])

  return (
    <div style={{ margin: "100px" }}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num) {
  console.log("Calling Slow Function!")
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}
