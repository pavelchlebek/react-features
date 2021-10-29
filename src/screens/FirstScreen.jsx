import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { CustomButton } from 'components/Button/Button';
import { Item } from 'components/item/Item';
import { Navbar } from 'components/Navbar';
import { Tag } from 'components/Tag/Tag';
import { useNumber } from 'CounterProvider';
import Button from 'react-bootstrap/Button';

import logo from '../logo.svg';

function FirstScreen() {
  const [loading, setLoading] = React.useState(true)
  const toggle = () => {
    setLoading((prev) => !prev)
  }

  const number = useNumber()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => toggle()}>
          Palko <code>src/App.js</code> je velkej programátor!!! :-).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {loading && <p>loading...</p>}
        <Item title="Fourth Item" />
        <CustomButton>First Button</CustomButton>
        <Tag>This is a Tag</Tag>
        <Navbar />
        <Button style={{ marginBottom: "10px" }}>Bootstrap Button</Button>
        <button className="btn btn-warning">Second Button</button>
        <div style={{ width: "70%", display: "flex" }}>
          <p style={{ flex: 1 }} className="btn btn-danger">
            Palko je boss!!!
          </p>
        </div>
        <div>{number.number}</div>
        <button onClick={() => number.increment()}>Increment</button>
        <button onClick={number.decrement}>Decrement</button>
      </header>
    </div>
  )
}

export default FirstScreen
