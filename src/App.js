import React, { Component } from 'react';
import './App.css';
import {Home, RegisterLogin, License, Destination, Payment, Confirm} from './containers'
import {Header, Footer} from './components'
import {checkIfloggedIn} from './utils/loginutils'
import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();

class App extends Component {

  constructor() {
    super();
    this.state = {
      appName: "VolksAuto",
      isLoggedIn: checkIfloggedIn(),
      userData: null,
      license: null
    }
    this.updateLoggedInState = this.updateLoggedInState.bind(this)
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.updateHeader = this.updateHeader.bind(this);
    this.setLicense = this.setLicense.bind(this);
  }

  setLicense(o) {
    this.setState({
      license: o
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

  updateHeader(data) {
    this.setState({
      userData: data
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
          <div className={"app-header-container app-header-container-color-top"} >
              <Header 
                appName={this.state.appName} 
                onClick={this.openModal}
                data={this.state.userData}
              >
            </Header>
          </div>

          <Router history={browserHistory}>
            <div style={{width:"100%"}}>
              <Route 
                exact path="/" 
                component={Home} 
                appName={this.state.appName}
                isLoggedIn={this.state.isLoggedIn}
                updateLoggedInState={this.updateLoggedInState}
              >
              </Route>
              <Route
                path="/license"
                render={(routeProps)=><License {...routeProps} license={this.setLicense}></License> } 
              >
              </Route>
              <Route
                path="/destination"
                component={Destination}
              >
              </Route>
              <Route
                path="/payment"
                component={Payment}
              >
              </Route>
              <Route
                path="/confirm"
                component={Confirm}
              >
              </Route>
            </div>
          </Router>
          <div className="home-footer-container">
            <Footer appName={this.state.appName}></Footer>
          </div>
        </div>
        {
          this.state.openModal? (
            <div className="home-modal-container">
              <RegisterLogin
                onExit={this.closeModal} 
                show={this.state.openModal}
                step={this.state.isLoggedIn?"loggedIn":"initial"}
                update={this.updateHeader}
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
