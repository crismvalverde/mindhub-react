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
		const city = this.props.match.params.id
		this.props.getItinerariesByCity(city);
	}

	render() {
		var { loading, itineraries } = this.props;
		
		console.log(this.props.itineraries.length)
		console.log(this.props.itineraries)

		if (this.props.itineraries.length===0) {
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
						{console.log(itineraries)}
					
						{itineraries.map((elm)=>{
							return <li key={elm._id}>{elm.title}</li>
						})}
						{}
					</ul>
				</div>
			);
		}
	}
}

Itineraries.propTypes = {
	getItinerariesByCity: PropTypes.func.isRequired,
	itineraries: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		itineraries: state.item2.itineraries
	};
};

export default connect(mapStateToProps, { getItinerariesByCity })(Itineraries);