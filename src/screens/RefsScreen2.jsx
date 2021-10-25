// @ts-nocheck
import * as React from 'react';

export const RefsScreen2 = () => {
  const [name, setName] = React.useState("")
  const renderCount = React.useRef(0)

  // used to count number of rerenders
  // React.useEffect(() => {
  //   renderCount.current += 1
  // })

  // this thing is storing previous state of name
  const prevName = React.useRef("")

  React.useEffect(() => {
    prevName.current = name
  }, [name])

  const inputRef = React.useRef()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}
