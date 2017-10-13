import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebpackLogo from './webpack.svg';
import SSLogo from './silverstripe-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={SSLogo} className="ss-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={WebpackLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SS4 + REACT + WEBPACK</h1>
          <p>anyone know how to get webpack watch working with Vagrant?? compiles falsely STopped?</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload Hello.
        </p>
      </div>
    )
  }
}

export default App;
