import React from 'react';
import logo from './logo.svg';
import './App.css';

import  "slash-gis/index.css";
// @ts-ignore
import  {SlaGis,BaseWidget} from "slash-gis/index";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React


        </a>
      </header>

      <SlaGis></SlaGis>

      <SlaGis></SlaGis>

      <SlaGis></SlaGis>

      <SlaGis></SlaGis>


        <BaseWidget></BaseWidget>
    </div>
  );
}

export default App;
