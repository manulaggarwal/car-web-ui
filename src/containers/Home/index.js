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
                this.text
            ],
            title : [
                "Title 1",
                "Title 2"
            ],
            openModal: false,
            isLoggedIn: props.isLoggedIn       
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
                                <Content.title title={this.state.title[1]}></Content.title>
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