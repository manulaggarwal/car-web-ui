import React, {Component} from 'react'
import './modal.css'
import {Modal, FormGroup, FormControl, Button} from 'react-bootstrap'

class modal extends Component {

    render() {
        return (
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>Enter Email-ID/Mobile-Number</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="emailOrPhoneGroup">
                                <FormControl
                                    type="text"
                                    placeholder="Enter Email-ID/Mobile-Number"
                                    onChange={()=>null}
                                >
                                </FormControl>
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="mdl-btn mdl-btn-close" onClick={this.props.onExit}>Close</Button>
                        <Button className="mdl-btn mdl-btn-primary">Next</Button>
                    </Modal.Footer>
                </Modal>
        );
    }

}

export default modal;