import React, { Component } from "react";
import { connect } from "react-redux";
import { getItinerariesByCity } from "./actions/itineraryActions";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Footer from './footer';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Activities from "./Activities";

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
					<Container>
						<h1>Barcelona</h1>
						<h6 className="justify-content-left">Available MYtineraries:</h6>
					</Container>
					{itineraries.map(elm => (
						<Container>
							<Row>
								<Col>
									<Image src={elm.profilePic} width="100px" roundedCircle alt="profile pic" />
									<p>Username</p>
								</Col>
								<Col>
									<Row>
										<Col><h6>{elm.title}</h6></Col>
									</Row>
									<Row>
										<Col><p>Likes: {elm.rating}</p></Col>
										<Col><p>{elm.duration} Hours</p></Col>
										<Col><p>${elm.price}</p></Col>
									</Row>
									<Row>
										<Col><p>{elm.hashtags.join(" ")}</p></Col>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col>
									<Accordion defaultActiveKey="0">
										<Card>
											<Accordion.Toggle as={Card.Header} eventKey="1">
												View All
										</Accordion.Toggle>
											<Accordion.Collapse eventKey="1">
												<Card.Body>
													<Row>
														<Col>
															<Activities />
													</Col>
													</Row>
												</Card.Body>
											</Accordion.Collapse>
										</Card>
									</Accordion>
								</Col>
							</Row>
						</Container>
					))}
					<Link to="/cities"><h6>Choose another city...</h6></Link>
					<Footer />
				</div>
			)
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