import React from 'react';

export const useUpdateLogger = (value) => {
  React.useEffect(() => {
    console.log(value)
  }, [value])
}
