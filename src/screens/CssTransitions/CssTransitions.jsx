import React from "react"

import classes from "./CssTransitions.module.css"

export const CssTransitions = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.child}></div>
    </div>
  )
}
