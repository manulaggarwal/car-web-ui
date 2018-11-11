import React, {Component} from 'react'
import {Carousel, Content, Footer, Card} from '../../components'
import {Button} from 'react-bootstrap'
import './home.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom'

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text : [
                this.text,
                this.text2
            ],
            title : [
                "What is "+props.appName+"?",
                "Why "+props.appName+"?"
            ],
            openModal: false,
            isLoggedIn: props.isLoggedIn       
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    text = `An Autonomous vehicle with mobility Licence as a service, where
    autonomous car will pick up and drop the customer to their
    destination based on the mobility licence which he/she have been
    selected while booking the car.`

    text2 = `The requirement of this project is to make different services of mobility licence as
    per the user requirement/individual specific need (van, city car, bus). The user can order this car by
    making a request either at the mobile app or website so that Autonomous car will come to the pick up
    the user and drop them to their destination.`

    openModal() {
        this.setState({
            openModal: true
        })
    }

    closeModal() {
        this.setState({
            openModal: false
        })
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-carousel-container">
                    <Carousel></Carousel>
                </div>
                <div className="home-license-cards">
                    <Card></Card>
                </div>
                <div className="home-content">
                    <ScrollAnimation 
                        animateIn="fadeIn"
                        animationPreScroll
                    >
                        <div className="home-content-1">
                            <Content text={this.state.text[0]}>
                                <Content.title title={this.state.title[0]}></Content.title>
                            </Content>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn="fadeIn"
                    >
                        <div className="home-content-2">
                            <Content text={this.state.text[1]} hasImage={true}>
                                <Content.title marginLeft="-250px" title={this.state.title[1]}></Content.title>
                            </Content>
                        </div>
                    </ScrollAnimation>
                    <div className="home-book-button">
                        <Link to="/license">
                            <Button>Book Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;