import React, { Component } from 'react'
import Footer from './footer';
import { connect } from 'react-redux';
import { getItems } from './actions/itemActions';
import PropTypes from 'prop-types';

class CitiesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      loading: false,
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000/cities/all')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         loading: true,
  //         cities: json,
  //       })
  //     });
  // }

  componentDidMount() {
    this.props.getItems();
  }

  // render() {
  //   const {items} = this.props.item;
  // }

  render() {
    var { loading, cities } = this.props.cities;

    if (!loading) {
      return (
        <div className="container">
          <h3>Loading...</h3>
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <ul>
            {cities.map(city => (
              <li key={city.id}>
                {city.name + ", " + city.country}
              </li>
            ))}
          </ul>
          <Footer />
        </div>
      )
    }
  }
}

CitiesList.propTypes = {
  getItems: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return (
    {
      cities: state.item
    })
}

export default connect(mapStateToProps, { getItems })(CitiesList)