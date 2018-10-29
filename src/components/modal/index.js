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
                    <Modal.Footer>
                        <Button className="mdl-btn mdl-btn-close" onClick={this.props.onExit}>Close</Button>
                        <Button className="mdl-btn mdl-btn-primary" onClick={this.props.onPrimaryButtonClick}>{this.props.formName === "register"? "Register":"Next"}</Button>
                    </Modal.Footer>
                </Modal>
        );
    }

}

export default modal;