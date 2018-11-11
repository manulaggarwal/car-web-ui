import React,{Component} from 'react'
import {Radio, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import paycard from './paycard.png'
import mastercard from './master-card.png'
import paypal from './paypal.png'
import visa from './visa.png'
import './payment.css'

class Payment extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="payment-container">
                <div className="payment-heading">
                    <Image src={paycard} className="payment-heading-logo"></Image>
                    <h4 className="payment-heading-title">Choose Payment Option</h4>
                </div>
                <div className="payment-cards">
                        <div className="pay-card-1">
                            <ScrollAnimation
                                animateIn="fadeIn"
                            >
                                <Image style={{width:"300px", height:"200px"}} src={mastercard}></Image>
                                <Radio name="card"><b>Select</b></Radio>
                            </ScrollAnimation>
                        </div>
                        <div className="pay-card-2">
                            <ScrollAnimation
                                animateIn="fadeIn"
                            >
                                <Image src={visa} style={{width:"200px", height:"200px"}}></Image>
                                <Radio name="card"><b>Select</b></Radio>
                            </ScrollAnimation>
                        </div>
                        <div className="pay-card">
                            <ScrollAnimation
                                animateIn="fadeIn"
                            >
                                <Image src={paypal} style={{width:"200px", height:"200px"}}></Image>
                                <Radio name="card"><b>Select</b></Radio>
                            </ScrollAnimation>
                        </div>
                </div>
                <div className="payment-continue">
                    <Link to="/destination">
                        <Button>Pay and Continue</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Payment