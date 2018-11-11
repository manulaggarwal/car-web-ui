import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import './destination.css'

class Destination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matrix: {
                distance: null,
                duration: null
            },
            showMatrix: false
        }
        this.loadMaps = this.loadMaps.bind(this);
        this.fetchCurrentLocation = this.fetchCurrentLocation.bind(this);
        this.onDestinationInput = this.onDestinationInput.bind(this);
    }

    fetchCurrentLocation() {
        window.navigator.geolocation.getCurrentPosition((pos)=>{
            this.currentPosition = pos;
            this.loadMaps(window.google.maps)
        })
    }

    loadMaps(maps) {
        this.myPos = {
            lat: this.currentPosition.coords.latitude, 
            lng: this.currentPosition.coords.longitude
        };
        let input = document.getElementById('pac-input');
        new maps.places.Autocomplete(input);
        this.directionsService = new maps.DirectionsService;
        this.directionsDisplay = new maps.DirectionsRenderer;
        this.gmaps = new maps.Map(
            document.getElementById("map"),
            {zoom: 15, center: this.myPos}
        )
        this.directionsDisplay.setMap(this.gmaps);
        input.addEventListener('blur', this.onDestinationInput)
        new maps.Marker({position: this.myPos, map: this.gmaps});
        // this.loadPlaces(maps);
    }

    onDestinationInput() {
        this.directionsService.route({
            origin: this.myPos,
            destination: document.getElementById('pac-input').value,
            travelMode: 'DRIVING'
          }, (response, status) => {
              console.log(response)
            if (status === 'OK') {
              this.directionsDisplay.setDirections(response);
              this.setMatrix(response)
            } else {
              window.alert('Please Search Again!');
            }
          });
    }

    setMatrix(response) {
        this.setState({
            matrix: {
                distance: response.routes[0].legs[0].distance.text,
                duration: response.routes[0].legs[0].duration.text
            },
            showMatrix: true
        })
    }

    loadPlaces(maps) {
        let input = document.getElementById('pac-input');
        let autocomplete = new maps.places.Autocomplete(input);
        console.log(autocomplete)
        autocomplete.bindTo('bounds', this.gmaps);
    }

    componentDidMount() {
        if(window.google) {
            this.fetchCurrentLocation();
        }
    }

    componentWillMount() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="destination-container">

                <div className="destination-map-container">
                    <input type="text" placeholder="Enter Destination" autoFocus id="pac-input"></input>
                    <div id="map"></div>
                    {
                        this.state.showMatrix? (
                            <ScrollAnimation
                                animateIn="fadeIn"
                            >
                                <div className="destination-matrix">
                                    <div>
                                        <span>Distance: <b>{this.state.matrix.distance}</b></span>
                                    </div>
                                    <div>
                                        <span>Duration: <b>{this.state.matrix.duration}</b></span>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ) : null
                    }
                    <div className="destination-next-button">
                        <Link to="/confirm">
                            <Button>Book</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default Destination;