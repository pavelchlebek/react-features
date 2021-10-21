// @ts-nocheck
import './Item.css';

import React from 'react';

import styled from 'styled-components';

const StyledItem = styled.div`
  border: 1px solid #ccc;
  border-radius: ${(props) => (props.bigRadius ? "20px" : "5px")};
  background-color: beige;
  margin-bottom: 20px;
  & div {
    color: #ff5500;
    padding: 10px;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  & p {
    color: #22cc22;
  }
`

export const Item = ({ title }) => {
  return (
    <StyledItem bigRadius>
      <div>{title}</div>
      <p>additional paragraph</p>
    </StyledItem>
  )
}

// export const Item = ({ title }) => {
//   return (
//     <div className="wrapper">
//       <div className="title">{title}</div>
//       <p>additional paragraph</p>
//     </div>
//   )
// }
