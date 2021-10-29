import * as React from 'react';

import { useNumber } from 'CounterProvider';
import {
  Alert,
  Breadcrumb,
  Button,
} from 'react-bootstrap';

export const BootstrapScreen = () => {
  const number = useNumber()
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        height: "500px",
        borderWidth: "1px",
        borderColor: "#aaa",
        borderStyle: "solid",
        // backgroundColor: "#282c34",
      }}
    >
      <p
        style={{ fontWeight: "normal" }}
        className="text-center text-uppercase text-white bg-success font-weight-bold p-5 rounded"
      >
        Palko jsi borec a všechno, co chceš, dokážeš!
      </p>
      <Button className="btn-primary">TestButton</Button>
      <Alert variant="danger">This is Alert</Alert>
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      <div>{number.number}</div>
      <button onClick={number.increment}>Increment</button>
      <button onClick={number.decrement}>Decrement</button>
    </div>
  )
}
