import React,{Component} from 'react'
import {Image, Button} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import loader from './loading.gif';
import tick from './tick.gif';
import './confirm.css'

class Confirm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: true
        }
        this.stopLoader = this.stopLoader.bind(this)
    }

    stopLoader() {
        setTimeout(()=>{
            this.setState({
                showLoader: false
            })
        }, 5000)
    }

    componentDidMount() {
        this.stopLoader()
    }

    render() {
        return (
            <div className="confirm-container">
                <div className="confirm-content">
                    <div className={this.state.showLoader?"confirm-loader":"confirm-hide-loader"}>
                        <Image src={loader}></Image>
                        <div className="confirm-loader-booking-text">
                            <span><b>Booking...</b></span>
                        </div>
                    </div>
                    {
                        !this.state.showLoader?(
                            <ScrollAnimation
                                animateIn="fadeIn"
                            >
                                <Image src={tick} style={{width:"150px"}}></Image>
                                <span><b>Congrats your booking is successful. Enjoy your ride! :)</b></span>
                                <div className="confirm-home-button">
                                    <Link to="/">
                                        <Button>Home</Button>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        ): null
                    }
                </div>
            </div>
        );
    }
}

export default Confirm;