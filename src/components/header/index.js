import React from 'react'
import './Header.css'

import logo from './car-logo.png'
import {Button, Image} from 'react-bootstrap'
import {Navbar} from '../index'

const header = ({appName, onClick, data}) => (
    
    <div className="header-banner-container">
        <div className="header-content-alignment">
                <div className="header-logo">
                    <Image src={logo} style={{width:"100px",height:"100px", filter: "grayscale(100%)", marginRight: "20px" }}></Image>
                    <span style={{fontSize: "x-large", fontWeight: "bold"}}>{appName}</span>
                </div>
            {
                data? 
                <div className="header-action-user">
                    <span className="glyphicon glyphicon-user" aria-hidden="true">&nbsp;{data.firstName}</span>
                </div>
                : 
                <div className="header-action-items">
                    <Button variant="light" onClick={onClick}><b>Register/Login</b></Button>
                </div>
            }
            <div className="header-navbar">
                <Navbar></Navbar>
            </div>
        </div>
    </div>
);

export default header;