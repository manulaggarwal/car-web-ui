import React, {Component} from 'react'
import {Header, Carousel} from '../../components'
import './home.css'

class Home extends Component {
    
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="home-container">
                <div className="home-header-container">
                    <Header></Header>
                </div>
                <div className="home-carousel-container">
                    <Carousel></Carousel>
                </div>
            </div>
        )
    }
}

export default Home;