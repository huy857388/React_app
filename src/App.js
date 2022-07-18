import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<img src="../logo192.png" />
		
        <p>
          === Demo React App ===
        </p>
        <a
          className="App-link"
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My React App
        </a>
      </header>
    </div>
  );
}

export default App;
