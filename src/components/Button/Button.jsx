// @ts-nocheck
import './Button.css';

import React from 'react';

import styled from 'styled-components';

// export const Button = ({ children }) => {
//   const [clicked, setClicked] = React.useState(false)
//   let buttonClasses = "default withPadding"
//   if (clicked) {
//     buttonClasses += " clicked"
//   }
//   return (
//     <button
//       className={buttonClasses}
//       // className={`default withPadding ${clicked && "clicked"}`}
//       // className="default withPadding bigFont"
//       onClick={() => setClicked((prev) => !prev)}
//     >
//       {children}
//     </button>
//   )
// }

const Button = styled.button`
  background-color: ${(props) => (props.clicked ? "red" : "blue")};
  padding: ${(props) => (props.primary ? "30px" : 0)};
  border-radius: 8px;

  &:hover {
    background-color: #ff5555;
    color: #fff;
  }
`
export const CustomButton = ({ children }) => {
  const [clicked, setClicked] = React.useState(false)
  return (
    <Button clicked={clicked} primary={clicked} onClick={() => setClicked((prev) => !prev)}>
      {children}
    </Button>
  )
}
