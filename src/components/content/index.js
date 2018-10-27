import React, {Component} from 'react'
import './content.css'

const title = ({title}) => (
    <div>
        <h3>{title}</h3>
    </div>
)

class content extends Component {

    render() {
        return (
            <div>
                {this.props.children}
                <div className="content-text">
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

content.title = title;

export default content;