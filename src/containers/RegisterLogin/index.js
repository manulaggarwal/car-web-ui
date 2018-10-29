import React, {Component} from 'react'
import {Modal} from '../../components'
import {FormGroup, FormControl} from 'react-bootstrap'
import {checkIfUserExists} from '../../utils/loginutils'
import Register from './Register'

class LoginRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: props.step,
            user: undefined,
            value: "",
            valid: false
        }
        this.handlePrimaryButtonClick = this.handlePrimaryButtonClick.bind(this);
        this.renderLoginRegisterModal = this.renderLoginRegisterModal.bind(this);
        this.renderLoginModal = this.renderLoginModal.bind(this);
        this.renderRegisterModal = this.renderRegisterModal.bind(this);
        this.handleLoginregisterModalValueChange = this.handleLoginregisterModalValueChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }    

    isLoginRegisterFormValid = false;

    handlePrimaryButtonClick() {
        if(this.isLoginRegisterFormValid) {
            this.setState({
                valid: true,
                step: checkIfUserExists(this.state.value)? "login": "register"
            })
        }
    }

    handleLoginregisterModalValueChange(e) {
        this.setState({
            value: e.target.value
        })   
    }

    getValidationState() {
        let value = this.state.value;
        let regexMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(value.match(regexMobile)) {
            this.isLoginRegisterFormValid = true
            return "success"
        } else if(value.match(regexEmail)) {
            this.isLoginRegisterFormValid = true
            return "success"
        } else if(value.length) {
            this.isLoginRegisterFormValid = false
            return "error"
        }
        this.isLoginRegisterFormValid = false
        return null
    }

    renderLoginModal() {
        return null
    }

    renderRegisterModal() {
        return (
            <div className="loginregister-register-container">
                <Register
                    onExit={this.props.onExit} 
                    show={this.props.show}
                >
                </Register>
            </div>
        )
    }

    renderLoginRegisterModal() {
        return (
            <Modal
                onExit={this.props.onExit} 
                show={this.props.show}
                title="Enter Email-ID/Mobile-Number"
                onPrimaryButtonClick={this.handlePrimaryButtonClick}
            >
                <form>
                    <FormGroup 
                        controlId="emailOrPhoneGroup"
                        validationState={this.getValidationState()}
                    >
                        <FormControl
                            type="text"
                            placeholder="Enter Email-ID/Mobile-Number"
                            onChange={this.handleLoginregisterModalValueChange}
                        >
                        </FormControl>
                        <FormControl.Feedback></FormControl.Feedback>
                    </FormGroup>
                </form>
            </Modal>
        )
    }

    render() {
        return (
            <div className="register-login-main">
                {
                    this.state.step === "initial"? 
                                    this.renderLoginRegisterModal()
                                        :
                                    this.state.step === "login"?
                                                    this.renderLoginModal()
                                                        :
                                                    this.renderRegisterModal()

                }
            </div>
        );
    }
}

export default LoginRegister;