import React, { Component } from 'react';
import './App.css';
import {Home} from './containers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-home-container">
          <Home></Home>
        </div>
      </div>
    );
  }
}

export default App;
