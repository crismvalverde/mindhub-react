import React, { Component } from 'react'
import Footer from './footer';

// class Cities extends Component {
//   render() {
//     return (
//       <div className="container">
//         <h1>Cities page</h1>
//         <Footer />
//       </div>
//     )
//   }
// }

// export default Cities

class Prueba extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/cities/all')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          cities: json,
        })
      });
  }

  render() {
    var { isLoaded, cities } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          <ul>
            {cities.map(city => (
              <li key={city.id}>
                {city.name + ", " + city.country}
              </li>
            ))}
          </ul>
          <div className="container"><Footer /></div>
        </div>
      )
    }
  }
}

export default Prueba