import React from 'react';

import whatever from './Tag.module.css';

export const Tag = ({ children }) => {
  return (
    <div className={whatever.tag}>
      <div>{children}</div>
    </div>
  )
}
