import React, { Component } from 'react';
import './App.css';
import {Home} from './containers'
import {checkIfloggedIn} from './utils/loginutils'

class App extends Component {

  constructor() {
    super();
    this.state = {
      appName: "VolksAuto",
      isLoggedIn: checkIfloggedIn()
    }
    this.updateLoggedInState = this.updateLoggedInState.bind(this)
  }

  updateLoggedInState() {
    this.setState({
      isLoggedIn: checkIfloggedIn()
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-home-container">
          <Home 
            appName={this.state.appName}
            isLoggedIn={this.state.isLoggedIn}
            updateLoggedInState={this.updateLoggedInState}
          >
          </Home>
        </div>
      </div>
    );
  }
}

export default App;
