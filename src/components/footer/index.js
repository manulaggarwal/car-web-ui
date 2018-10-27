import React,{Component} from 'react'
import './footer.css'
import logo from '../header/car-logo.png'
import {Image} from 'react-bootstrap'

class footer extends Component {
    render() {
        return (
            <div className="footer-main">
                <div className="footer-logo">
                    <Image src={logo}></Image>
                    <span>{this.props.appName}</span>
                </div>
            </div>
        )
    }
}

export default footer;