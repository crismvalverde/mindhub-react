import React, { Component } from "react";
import Footer from "./footer";
import { connect } from "react-redux";
import { getItems } from "./actions/itemActions";
import PropTypes from "prop-types";

class CitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      loading: false,
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    var { loading, cities } = this.props.cities;
    let filteredCities = cities.filter(city => {
      return (
        city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

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
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          <ul>
            {filteredCities.map(city => (
              <li key={city.id}>{city.name + ", " + city.country}</li>
            ))}
          </ul>
          <Footer />
        </div>
      );
    }
  }
}

CitiesList.propTypes = {
  getItems: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    cities: state.item
  };
};

export default connect(mapStateToProps, { getItems })(CitiesList);
