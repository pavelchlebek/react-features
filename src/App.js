import './App.css';

import React from 'react';

import { CustomButton } from 'components/Button/Button';
import { Item } from 'components/item/Item';
import { Navbar } from 'components/Navbar';
import { Tag } from 'components/Tag/Tag';

import logo from './logo.svg';

function App() {
  const [loading, setLoading] = React.useState(true)
  const toggle = () => {
    setLoading((prev) => !prev)
  }
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
      </header>
    </div>
  )
}

export default App
