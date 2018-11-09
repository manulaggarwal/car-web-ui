import React, {Component} from 'react'
import {Modal} from '../../../components'
import {Form, FormGroup, FormControl, ControlLabel, Row, Col, Checkbox, Button} from 'react-bootstrap'
import {setRegisterUserDetails} from '../../../utils/loginutils'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './register.css'

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            firstName: "",
            lastName: "",
            emailOrPhone: props.value || "",
            password: "",
            passwordConfirmation: 0,
            tncAccepted: false,
            isError: false
        }
        this.handleDOBDateChange = this.handleDOBDateChange.bind(this)
        this.handleTermsAndConditionsCheckbox = this.handleTermsAndConditionsCheckbox.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.setFirstNameValue = this.setFirstNameValue.bind(this)
        this.setLastNameValue = this.setLastNameValue.bind(this)
        this.setPhoneOrEmailValue = this.setPhoneOrEmailValue.bind(this)
        this.setPasswordValue = this.setPasswordValue.bind(this)
        this.setPasswordConfirmationValue = this.setPasswordConfirmationValue.bind(this)

        this.getFirstNameValidation = this.getFirstNameValidation.bind(this)
        this.getLastNameValidation = this.getLastNameValidation.bind(this)
        this.getPhoneOrEmailValidation = this.getPhoneOrEmailValidation.bind(this)
        this.getPasswordValidation = this.getPasswordValidation.bind(this)
        this.getPasswordConfirmationValidation = this.getPasswordConfirmationValidation.bind(this)
    }

    handleDOBDateChange(date) {
        this.setState({
            date: date
        })
    }

    setFirstNameValue(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    setLastNameValue(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    setPhoneOrEmailValue(e) {
        this.setState({
            emailOrPhone: e.target.value
        })
    }

    setPasswordValue(e) {
        this.setState({
            password: e.target.value
        })
    }

    setPasswordConfirmationValue(e) {
        this.setState({
            passwordConfirmation: e.target.value
        })
    }

    getPasswordConfirmationValidation() {
        let confirmValue = this.state.passwordConfirmation
        if(confirmValue === this.state.password) {
            return "success"
        } else if(confirmValue.length) {
            return "error"
        }
        return null
    }

    getPasswordValidation() {
        let value = this.state.password
        if(value.length>5) {
            return "success"
        } else if(value.length) {
            return "error"
        }
        return null
    }

    getPhoneOrEmailValidation() {
        let emailOrPhone = this.state.emailOrPhone;
        let regexMobile = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(emailOrPhone.match(regexEmail)) {
            return "success"
        } else if(emailOrPhone.match(regexMobile)) {
            return "success"
        } else if(emailOrPhone.length) {
            return "error"
        }
        return null
    }

    getFirstNameValidation() {
        let firstName = this.state.firstName;
        let nameRegex = /^[a-zA-Z ]{2,30}$/;
        if(firstName.match(nameRegex)) {
            return "success"
        } else if(firstName.length){
            return "error"
        }
        return null
    }

    getLastNameValidation() {
        let lastName = this.state.lastName;
        let nameRegex = /^[a-zA-Z ]{2,30}$/;
        if(lastName.match(nameRegex)) {
            return "success"
        } else if(lastName.length){
            return "error"
        }
        return null
    }

    handleTermsAndConditionsCheckbox() {
        this.setState({
            tncAccepted: this.input.checked
        })
    }

    checkIfFormValid() {
        let valid = [
            this.getFirstNameValidation() === "success"? true: false,
            this.getPhoneOrEmailValidation() === "success"? true: false,
            this.getPasswordValidation() === "success"? true: false,
            this.getPasswordConfirmationValidation() === "success"? true: false,
            this.state.tncAccepted
        ]
        return valid.every(e=>e===true)
    }

    handleSubmit(e) {
        e.preventDefault();
        let isFormValid = this.checkIfFormValid()
        if(isFormValid) {
            this.setState({
                isError: false
            })
            let data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailOrPhone: this.state.emailOrPhone,
                password: this.state.password,
                loggedIn: true
            }
            setRegisterUserDetails(data);
            this.props.onExit();
            this.props.update(data);
        } else {
            this.setState({
                isError: true
            })
        }
    }

    render() {
        return (
            <div className="register-main">
                <Modal
                    onExit={this.props.onExit} 
                    show={this.props.show}
                    title="Register"
                    hideBasicFooter={true}
                    formName="register"
                >
                    <Form>
                        <FormGroup 
                            controlId="RegisterFirstNameGroup"
                            validationState={this.getFirstNameValidation()}
                        >
                            <FormControl
                                type="text"
                                placeholder="First Name *"
                                onChange={this.setFirstNameValue}
                                required
                            >
                            </FormControl>
                            <FormControl.Feedback></FormControl.Feedback>
                        </FormGroup>
                        <FormGroup
                            controlId="RegisterLastNameGroup"
                            validationState={this.getLastNameValidation()}
                        >
                            <FormControl
                                type="text"
                                placeholder="Last Name"
                                onChange={this.setLastNameValue}
                            >
                            </FormControl>
                            <FormControl.Feedback></FormControl.Feedback>   
                        </FormGroup>
                        <FormGroup
                            controlId="RegisterEmailOrPhoneGroup"
                            validationState={this.getPhoneOrEmailValidation()}
                        >
                            <FormControl
                                type="text"
                                placeholder="Email/Phone Number *"
                                onChange={this.setPhoneOrEmailValue}
                                value={this.state.emailOrPhone}
                                required
                            >
                            </FormControl>
                            <FormControl.Feedback></FormControl.Feedback>
                        </FormGroup>
                        <FormGroup
                            controlId="RegisterBirthDateGroup"
                        >
                            <ControlLabel style={{color:"white"}}>Date Of Birth *</ControlLabel>
                            <Row>
                                <Col xs={12}>
                                    <DatePicker
                                        selected = {this.state.date}
                                        onChange = {this.handleDOBDateChange}
                                        showMonthDropdown
                                        showYearDropdown
                                        required
                                    >
                                    </DatePicker>
                                </Col>
                            </Row>   
                        </FormGroup>
                        <Row>
                            <Col xs={6}>
                                <FormGroup
                                    controlId="RegisterPasswordGroup"
                                    validationState={this.getPasswordValidation()}
                                >
                                    <FormControl
                                        type="password"
                                        placeholder="Password *"
                                        onChange={this.setPasswordValue}
                                        required
                                    >
                                    </FormControl>
                                    <FormControl.Feedback></FormControl.Feedback>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup
                                    controlId="RegisterPasswordConfirmGroup"
                                    validationState={this.getPasswordConfirmationValidation()}
                                >
                                    <FormControl
                                        type="password"
                                        placeholder="Confirm Password *"
                                        onChange={this.setPasswordConfirmationValue}
                                        required
                                    >
                                    </FormControl>
                                    <FormControl.Feedback></FormControl.Feedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup
                            controlId="TandCGroup"
                        >
                            <Checkbox 
                                style={{color: "white"}}
                                inputRef={ref=>{this.input = ref}}
                                onChange={this.handleTermsAndConditionsCheckbox}
                                required
                            >
                                Accept Terms & Conditions
                            </Checkbox>
                        </FormGroup>
                        <div className="register-button-container">
                            <div className="register-button-group">
                                <Button className="register-button-elements register-button-close" onClick={this.props.onExit} type="button">Close</Button>
                                <Button className="register-button-elements register-button-submit" onClick={this.handleSubmit} type="submit">Submit</Button>
                            </div>
                            <div className="register-error-container">
                                <span className={this.state.isError?"register-submit-error-msg register-submit-error-visible":"register-submit-error-msg register-submit-error-hidden"}>One or more fields are missing/incorrect</span>
                            </div>
                        </div>
                    </Form>
                </Modal>
            </div>
        ) 
    }
}

export default Register;