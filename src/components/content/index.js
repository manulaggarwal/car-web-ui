import React, {Component} from 'react'
import './content.css'
import {Image} from 'react-bootstrap'
import movingCar from './moving-car.gif'

const title = ({title, marginLeft="0px"}) => (
    <div style={{marginLeft: marginLeft}}>
        <h3>{title}</h3>
    </div>
)

class content extends Component {

    render() {
        return (
            <div>
                {this.props.children}
                <div className="content-text">
                    <div className="content-text-image-right">
                        <p>{this.props.text}</p>
                        {
                            this.props.hasImage? (
                                <Image src={movingCar}></Image>
                            ): null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

content.title = title;

export default content;