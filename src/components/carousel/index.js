import React from 'react';
import './carousel.css';

import {Carousel, Image} from 'react-bootstrap';
import car1 from './bw-car.png';
import car3 from './car3.png';
//import car4 from './car4.png';
import info from './info.png';

const HomeCarousel = () => (
    <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <div className="carousel-item-inner-container">
                            <Image src={info} style={{width:"auto", height:"500px"}}></Image>
                            <Carousel.Caption>
                                <h3 style={{color:"black"}}>Slide 1</h3>
                                <p style={{color:"black"}}>Caption 1</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-inner-container">
                            <Image src={car1} style={{width:"auto", height:"500px"}}></Image>
                            <Carousel.Caption>
                                <h3 style={{color:"black"}}>Slide 2</h3>
                                <p style={{color:"black"}}>Caption 2</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-inner-container">
                            <Image src={car3} style={{width:"auto", height:"500px"}}></Image>
                            <Carousel.Caption>
                                <h3>Slide 3</h3>
                                <p>Caption 3</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
)

export default HomeCarousel;