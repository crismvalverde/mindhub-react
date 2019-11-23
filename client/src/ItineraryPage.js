import React, { Component } from "react";
import Footer from "./footer";
import { Link } from 'react-router-dom';
import profilePic from './img/GaudiLover.png';
import Image from 'react-bootstrap/Image';

class ItineraryPage extends Component {
	render() {
		return (
			<div className="container">
				<div className="header"><h1>City name</h1></div>
				<div><h3>Available MYtineraries:</h3></div>
				<div>
					<Image src={profilePic} width="150px" roundedCircle alt="profile pic" />
				</div>
				<div>
					<Link to="/cities"><h6>Choose another city...</h6></Link>
				</div>
				<Footer />
			</div>
		);
	}
}

export default ItineraryPage