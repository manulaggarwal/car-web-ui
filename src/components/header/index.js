import React from 'react'
import './Header.css'

import logo from './car-logo.png'
import {Button, Image} from 'react-bootstrap';
import {Navbar} from '../index'

const header = () => (
    
    <div className="header-banner-container">
        <div className="header-content-alignment">
            <div className="header-logo">
                <Image src={logo} style={{width:"100px",height:"100px", filter: "grayscale(100%)", marginRight: "20px" }}></Image>
                <span style={{fontSize: "x-large"}}>Relaxi-Cab</span>
            </div>
            <div className="header-action-items">
                <Button variant="light"><b>Register/Login</b></Button>
            </div>
            <div className="header-navbar">
                <Navbar></Navbar>
            </div>
        </div>
    </div>
);

export default header;