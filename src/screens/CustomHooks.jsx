import * as React from 'react';

import { useCounter } from 'components/use-counter';

export const CustomHooks = () => {
  const counter = useCounter(true)
  const counterBack = useCounter(false)
  return (
    <div style={{ margin: "100px" }}>
      <div>{`Forwards: ${counter}`}</div>
      <div>{`Backwards: ${counterBack}`}</div>
    </div>
  )
}
