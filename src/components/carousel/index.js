import React from 'react';
import './carousel.css';

import {Carousel, Image} from 'react-bootstrap';
import car3 from './car3.png';
import info from './info.png';

const HomeCarousel = () => (
    <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <div className="carousel-item-inner-container">
                            <div className="carousel-qoute">
                                <i>"Self driving cars are the natural extension of active safety and obviously something we should do." -Elon Musk(Co-founder and CEO of Tesla Inc.)</i>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-inner-container">
                            <Image src={info} style={{width:"auto", height:"500px"}}></Image>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-inner-container">
                            <Image src={car3} style={{width:"auto", height:"500px"}}></Image>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
)

export default HomeCarousel;