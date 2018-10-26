import React, {Component} from 'react'
import './navbar.css'

import {NavDropdown, MenuItem} from 'react-bootstrap'

class HeaderNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <NavDropdown eventKey={1} title="&#9776;" >
                    <MenuItem eventKey={1.1}>How It Works?</MenuItem>
                    <MenuItem eventKey={1.2}>Services</MenuItem>
                </NavDropdown>
            </div>
        )
    }
}

export default HeaderNavbar;