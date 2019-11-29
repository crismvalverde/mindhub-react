import React, { Component } from "react";
import { connect } from "react-redux";
import { getItinerariesByCity } from "./actions/itineraryActions";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

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
		var { itineraries } = this.props;
		if (this.props.itineraries.length === 0) {
			return (
				<div className="container">
					<h3>Loading...</h3>
					<Link to="/cities"><h6>Choose another city...</h6></Link>
				</div>
			);
		} else {
			return (
				<div className="container">
					{itineraries.map(elm => (
						<div>
						<Image src={elm.profilePic} width="150px" roundedCircle alt="profile pic" />
						</div>
					))}
					<Link to="/cities"><h6>Choose another city...</h6></Link>
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

// <ul>
// {itineraries.map((elm) => {
// 	return <li key={elm._id}>{elm.title}</li>
// })}
// </ul>