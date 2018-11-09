import React, {Component} from 'react'
import './modal.css'
import {Modal, Button} from 'react-bootstrap'

class modal extends Component {

    render() {
        return (
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                    {
                        this.props.formName === "register"? 
                                            null
                                            :
                                            <Modal.Footer>
                                                <Button className="mdl-btn mdl-btn-close" onClick={this.props.onExit}>Close</Button>
                                                <Button className="mdl-btn mdl-btn-primary" onClick={this.props.onPrimaryButtonClick}>Next</Button>
                                            </Modal.Footer>
                    }
                </Modal>
        );
    }

}

export default modal;