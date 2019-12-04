import React, { Component } from 'react'
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Profile from './img/profilepic.jpg'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const username = this.state.username;
    // const password = this.state.password;
    // const email = this.state.email;
    // const firstName = this.state.firstName;
    // const lastName = this.state.lastName;
    // const country = this.state.country;
    const info = 
      this.state
      // username: username,
      // password: password,
      // email: email,
      // firstName: firstName,
      // lastName: lastName,
      // country: country
   // };
    const data = [...this.state.data, info];
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Create Account</h1>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Image src={Profile} width="150px" roundedCircle alt="Add Photo" />
            </Col>
          </Row>
          <br />
          <Form className="formulario" onSubmit={this.handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalUsername" className="justify-content-center">
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="username" name="username" value={this.state.username} onChange={this.handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPassword" className="justify-content-center">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail" className="justify-content-center">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalFirstName" className="justify-content-center">
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="first-name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalLastName" className="justify-content-center">
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="last-name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCountry" className="justify-content-center">
              <Form.Label column sm={2}>Country</Form.Label>
              <Col sm={4}>
                <Form.Control as="select" name="country" value={this.state.country} onChange={this.handleChange}>
                  <option>Choose...</option>
                  <option>Argentina</option>
                  <option>Brasil</option>
                  <option>Uruguay</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck" className="justify-content-center">
              <Col sm={4}>
                <Form.Check label="I agree to MYtinerary's Terms & Conditions" />
              </Col>
            </Form.Group>
            <Button type="submit">OK</Button>
          </Form>
          <div className="row">
            {this.state.data.map((info, index) => <Card key={index} info={info} />)}
          </div>
          <Footer />
        </Container>
      </div>
    )
  }
}


const Card = props =>
  <div className="col-md-6 col-lg-3">
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-title"><span>Username: </span>{props.info.username}</p>
        <p className="card-text">
          <span>Email: </span>{props.info.email}
        </p>
        <p className="card-text">
          <span>First Name: </span>{props.info.firstName}
        </p>
        <p className="card-text">
          <span>Last Name: </span>{props.info.lastName}
        </p>
        <p className="card-text">
        <span>Country: </span>{props.info.country}
      </p>
      </div>
    </div>
  </div>;

export default Register