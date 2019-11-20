import React, { Component } from "react";
import Footer from "./footer";

class Itinerary extends Component {

	render() {
		return (
			<div className="container">
				<h1>Rome</h1>
				<h3>Available MYtineraries:</h3>
				<Footer />
			</div>
		);
	}
}

export default Itinerary;