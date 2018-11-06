import React, { Component } from 'react';
import './App.css';
import {Home, RegisterLogin} from './containers'
import {Header} from './components'
import {checkIfloggedIn} from './utils/loginutils'

class App extends Component {

  constructor() {
    super();
    this.state = {
      appName: "VolksAuto",
      isLoggedIn: checkIfloggedIn(),
      scrollValueY : (window && window.scrollY) || 0,
    }
    this.updateLoggedInState = this.updateLoggedInState.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({
        scrollValueY: window.scrollY > 0? window.scrollY : 0
    })
  }

  openModal() {
    this.setState({
        openModal: true
    })
  }

  closeModal() {
    this.setState({
        openModal: false
    })
  }

  updateLoggedInState() {
    this.setState({
      isLoggedIn: checkIfloggedIn()
    })
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className={this.state.scrollValueY>0? "app-header-container app-header-container-color-scroll": "app-header-container app-header-container-color-top"} >
              <Header 
                appName={this.state.appName} 
                onClick={this.openModal}
              >
            </Header>
          </div>
          <Home 
            appName={this.state.appName}
            isLoggedIn={this.state.isLoggedIn}
            updateLoggedInState={this.updateLoggedInState}
          >
          </Home>
        </div>
        {
          this.state.openModal? (
            <div className="home-modal-container">
              <RegisterLogin
                onExit={this.closeModal} 
                show={this.state.openModal}
                step={this.state.isLoggedIn?"loggedIn":"initial"}
              >
              </RegisterLogin>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default App;
