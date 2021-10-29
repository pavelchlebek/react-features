import * as React from 'react';

import useLocalStorage from 'components/useLocalStorage';
import { useUpdateLogger } from 'components/useUpdateLogger';

export const WDSCustomHooks = () => {
  const [name, setName] = useLocalStorage("pswd", "beaulino") // we hook up [name, setName] to [value, setValue]
  useUpdateLogger(name)
  return (
    <div style={{ margin: "100px" }}>
      {/* here setName is calling setValue in the useLocalStorage custom hook */}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
