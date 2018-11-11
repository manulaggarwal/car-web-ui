import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './account.css'

class Account extends Component {

    constructor(props) {
        super(props);
        this.data = window.localStorage.getItem("user") && JSON.parse(window.localStorage.getItem("user"))
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        window.localStorage.removeItem("user")
    }

    dateFormat() {
        this.date = new Date(this.data.date);
    }

    componentWillMount() {
        if(this.data) {
            this.dateFormat()
        }
    }

    render() {
        return (
            <div className="account-container">
                <div className="account-main">
                    <div className="account-heading">
                        <span>{this.data.firstName}'s Account</span>
                        <hr></hr>
                    </div>
                    <div className="account-details">
                        <div className="account-details-left">
                            <div className="account-details-left-content">
                                <div className="account-profile-picture">
                                    <div className="glyphicon glyphicon-user picture"></div>
                                </div>
                                <div>
                                    <hr></hr>
                                </div>
                                <div className="account-profile-details">
                                    <div className="account-profile-details-left">
                                        <div className="account-profile-details-fields">
                                            <span>First Name:</span>
                                        </div>
                                        <div className="account-profile-details-fields">
                                            <span>Last Name:</span>
                                        </div>
                                        <div className="account-profile-details-fields">
                                            <span>Email/Mobile Number:</span>
                                        </div>
                                        <div className="account-profile-details-fields">
                                            <span>Date of Birth:</span>
                                        </div>
                                    </div>
                                    <div className="account-profile-details-right">
                                        <div className="account-profile-details-data">
                                            <span>{this.data.firstName}</span>
                                        </div>
                                        <div className="account-profile-details-data">
                                            <span>{this.data.lastName || "-"}</span>
                                        </div>
                                        <div className="account-profile-details-data">
                                            <span>{this.data.emailOrPhone}</span>
                                        </div>
                                        <div className="account-profile-details-data">
                                            <span>{this.date.toDateString()}</span>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="account-details-right">
                            <div className="account-details-right-title">
                                <span>My Licenses</span>
                            </div>
                            <div style={{flex: 1, marginTop: "-20%"}}>
                                <hr></hr>
                            </div>
                            <div className="account-details-right-heading">
                                <span>No Licenses found. Purchase license now to start riding.</span>
                            </div>
                            <div className="account-details-right-buy">
                                <Link to="/license">
                                    <Button>Buy License</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="account-logout">
                        <a href="/">
                            <Button onClick={this.handleLogout}>Logout</Button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;