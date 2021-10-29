import * as React from 'react';

export const EffectWindowScreen = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)

    // return window.removeEventListener("resize", handleResize)
    return () => {
      console.log("effect cleanup")
    }
  }, [])

  return <div style={{ margin: "120px" }}>{windowWidth}</div>
}
