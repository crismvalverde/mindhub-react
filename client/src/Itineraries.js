import React, { Component } from "react";
import Footer from "./footer";
import { connect } from "react-redux";
import { getItinerariesByCity } from "./actions/itineraryActions";
import PropTypes from "prop-types";
import ItineraryPage from './ItineraryPage';

class Itineraries extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itineraries: [],
			loading: false
		};
	}

	componentDidMount() {
		const city = this.props.match.params.name
		this.props.getItinerariesByCity(city);
	}

	render() {
		var { loading, itineraries } = this.props.itineraries;

		if (!loading) {
			return (
				<div className="container">
					<h3>Loading...</h3>
					<Footer />
				</div>
			);
		} else {
			return (
				<div className="container">
					<ul>
						{itineraries.map(city => (
							<li key={city.id}>{city.name + ", " + city.city}</li>
						))}
					</ul>
					<ItineraryPage />
				</div>
			);
		}
	}
}

Itineraries.propTypes = {
	getItinerariesByCity: PropTypes.func.isRequired,
	itineraries: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		itineraries: state.item2
	};
};

export default connect(mapStateToProps, { getItinerariesByCity })(Itineraries);