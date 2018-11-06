import React, {Component} from 'react'
import {Modal} from '../../../components'
import {Form, FormGroup, FormControl, ControlLabel, Row, Col} from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './register.css'

class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: moment()
        }
        this.handleDOBDateChange = this.handleDOBDateChange.bind(this)
    }

    handleDOBDateChange(date) {
        this.setState({
            date: date
        })
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
                        >
                            <FormControl
                                type="text"
                                placeholder="First Name *"
                                onChange={()=>null}
                                required
                            >
                            </FormControl>
                            <FormControl.Feedback></FormControl.Feedback>
                        </FormGroup>
                        <FormGroup
                            controlId="RegisterLastNameGroup"
                        >
                            <FormControl
                                type="text"
                                placeholder="Last Name"
                                onChange={()=>null}
                            >
                            </FormControl>
                            <FormControl.Feedback></FormControl.Feedback>   
                        </FormGroup>
                        <FormGroup
                            controlId="RegisterEmailOrPhoneGroup"
                        >
                            <FormControl
                                type="text"
                                placeholder="Email/Phone Number *"
                                onChange={()=>null}
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
                                    >

                                    </DatePicker>
                                </Col>
                                

                                {/* <Col sm={3}>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="dd"
                                        onChange={()=>null}
                                    >
                                        <option value="01">00</option>
                                    </FormControl>
                                </Col>
                                <Col sm={3}>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="mm"
                                        onChange={()=>null}
                                    >
                                        <option value="01">Jan</option>
                                    </FormControl>
                                </Col>
                                <Col sm={3}>
                                    <FormControl
                                        componentClass="select"
                                        placeholder="yyyy"
                                        onChange={()=>null}
                                    >
                                        <option value="1970">1970</option>
                                    </FormControl>
                                    <FormControl.Feedback></FormControl.Feedback>
                                </Col> */}
                            </Row>   
                        </FormGroup>
                        <FormGroup
                            controlId="RegisterPasswordGroup"
                        >
                            <Row>
                                <Col xs={6}>
                                    <FormControl
                                        type="password"
                                        placeholder="Password *"
                                        onChange={()=>null}
                                    >
                                    </FormControl>
                                    <FormControl.Feedback></FormControl.Feedback>
                                </Col>
                                <Col xs={6}>
                                    <FormControl
                                        type="password"
                                        placeholder="Confirm Password *"
                                        onChange={()=>null}
                                    >
                                    </FormControl>
                                    <FormControl.Feedback></FormControl.Feedback>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Form>
                </Modal>
            </div>
        ) 
    }
}

export default Register;