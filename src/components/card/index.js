import React, {Component} from 'react'
import './card.css'
import {Carousel} from 'react-bootstrap';
import json from '../../data/licenses.json'

class card extends Component {
    
    constructor(props) {
        super(props);
        this.data = json;
        console.log(json);
    }

    render() {
        return (
            <div className="card-main">
                <Carousel>
                    {
                        this.data.licenses.map((v, i)=>(
                            <Carousel.Item
                                key={i}
                            >
                                <div className="card-dimension">
                                    <div className="card-header">
                                        <span>{v.type}</span>
                                    </div>
                                    <div className="card-body">
                                        <span>{v.name}</span>
                                    </div>
                                    <div className="card-footer">
                                        <span>{v.price}</span>
                                    </div>
                                </div>
                            </Carousel.Item>        
                        ))
                    }
                </Carousel>
            </div>
        );
    }
}

export default card;