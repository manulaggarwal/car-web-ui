import React, {Component} from 'react'
import './card.css'
import {Carousel} from 'react-bootstrap';

class card extends Component {
    
    render() {
        return (
            <div className="card-main">
                <Carousel>
                    <Carousel.Item>
                        <div className="card-dimension">
                            <div className="card-header">
                                <span>Automatic Motor License</span>
                            </div>
                            <div className="card-body">
                                <span>Inter-state Travel</span>
                            </div>
                            <div className="card-footer">
                                <span>Starting From: € 12,99</span>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="card-dimension">
                            <div className="card-header">
                                <span>Automatic Motor License</span>
                            </div>
                            <div className="card-body">
                                <span>Inter-city Travel</span>
                            </div>
                            <div className="card-footer">
                                <span>Starting From: € 10,99</span>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default card;