import React, { Component } from "react";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { login } from './actions/loginActions';
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login({ "email": this.state.email })
  };

  // signGoogle() {
  //   window.location.href = 'http://localhost:5000/auth/google'
  // }

  componentDidMount = () => {
    (function () {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t)
    })()
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Login</h1>
            </Col>
          </Row>
          <br />
          <Form className="formulario" onSubmit={this.handleSubmit}>
            <Form.Group
              as={Row}
              controlId="formHorizontalUsername"
              className="justify-content-center"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalPassword"
              className="justify-content-center"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formHorizontalCheck"
              className="justify-content-center"
            >
              <Col sm={4}>
                <Form.Check
                  astype="checkbox"
                  name="remember"
                  label="Remember me"
                  value={this.state.remember}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Row>
              <Col>
                <Button type="submit" onClick={this.handleSubmit} >OK</Button>
              </Col>
            </Row>
          </Form>
          <br />
          <Row>
            <Col>
              <div className="g-signin2 justify-content-center" data-onsuccess="onSignIn"></div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <p>
                Don't have a MYtinerary acoount yet? You should create one! It's
                totally free and only takes a minute.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to={"/register"}>
                <h5>Create Account</h5>
              </Link>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    login: state.item5.login
  };
};

export default connect(mapStateToProps, { login })(Login);

// <Button type="submit" onClick={this.signGoogle.bind(this)} >Log in with Google</Button>

// handleSubmit = event => {
//   event.preventDefault();
//   this.props.login({ "email": this.state.email, "password": this.state.password })
// };