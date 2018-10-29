import React, {Component} from 'react'
import {Header, Carousel, Content, Footer, Card} from '../../components'
import './home.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {RegisterLogin} from '../index'

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
            scrollValueY : (window && window.scrollY) || 0,
            openModal: false,
            isLoggedIn: props.isLoggedIn       
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        this.setState({
            scrollValueY: window.scrollY > 0? window.scrollY : 0
        })
    }

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
                <div className={this.state.scrollValueY>0? "home-header-container home-header-container-color-scroll": "home-header-container home-header-container-color-top"} >
                    <Header 
                        appName={this.props.appName} 
                        onClick={this.openModal}
                    >
                    </Header>
                </div>
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
                </div>
                <div className="home-footer-container">
                    <Footer appName={this.props.appName}></Footer>
                </div>
                {
                    this.state.openModal? (
                        <div className="home-modal-container">
                            <RegisterLogin
                                onExit={this.closeModal} 
                                show={this.state.openModal}
                                step={this.state.isLoggedIn?"loggedIn":"initial"}
                            >
                            </RegisterLogin>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default Home;