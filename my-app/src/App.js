import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonToggle from './Button';
import { ConditionalRendering } from './ConditionalRendering';
import ShoppingList from './ShoppingList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ShoppingList />
        <ButtonToggle />
        <ConditionalRendering age="14" />
        <ConditionalRendering age="12" />
        
      </header>
    </div>
  );
}

export default App;
