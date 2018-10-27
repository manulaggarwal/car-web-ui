import React, { Component } from 'react';
import './App.css';
import {Home} from './containers'

class App extends Component {

  constructor() {
    super();
    this.state = {
      appName: "Relaxi-Taxi"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-home-container">
          <Home appName={this.state.appName}></Home>
        </div>
      </div>
    );
  }
}

export default App;
