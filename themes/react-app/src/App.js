import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import WebpackLogo from './img/webpack.svg';
import SSLogo from './img/silverstripe-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={SSLogo} className="ss-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={WebpackLogo} className="App-logo" alt="logo" />
        </header>

        <p className="App-intro">
          Welcome to SS4 + REACT + WEBPACK <br />
          To get started, edit <code>src/App.js</code> and save to reload Hello.
        </p>
      </div>
    )
  }
}

export default App;
