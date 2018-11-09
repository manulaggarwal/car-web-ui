import React, {Component} from 'react'
import {Thumbnail} from '../../components'
import {Button} from 'react-bootstrap'
import data from '../../data/licenses.json'
import './license.css'
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';

class LicenseContianer extends Component {

    constructor(props) {
        super(props);
        this.handleOptionSelected = this.handleOptionSelected.bind(this)
    }

    handleOptionSelected(e) {
        this.props.license(e.target.attributes["data-type"].value)
    }

    componentWillMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <ScrollAnimation
                animateIn="fadeIn"
            >
                <div className="license-container">
                    <div className="license-heading">
                        <h2>Choose from Various Licenses</h2>
                    </div>
                    <hr></hr>
                    <div className="license-grid-container">
                        {
                            data && data.licenses.map((obj,i)=>(
                                <ScrollAnimation
                                    animateIn="fadeIn"
                                    key={i}
                                >
                                    <Thumbnail
                                        name={obj.name}
                                        type={obj.type}
                                        price={obj.price}
                                        onSelect={this.handleOptionSelected}
                                    ></Thumbnail>
                                </ScrollAnimation>))
                        }
                    </div>
                    <div className="license-book-btn">
                        <Link to="/payment">
                            <Button>Next</Button>
                        </Link>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default LicenseContianer;