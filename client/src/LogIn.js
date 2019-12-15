import React, { Component } from "react";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const info = this.state;
    console.log(info);
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
                Username
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="username"
                  name="username"
                  required
                  value={this.state.username}
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
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
          </Form>
          <Row>
            <Col><Button type="submit">OK</Button></Col>
          </Row>
          <br />
          <Row>
            <Col><Button tag={Link} to="http://localhost:5000/auth/Google">Log in with Google</Button></Col>
          </Row>
          <br />
          <Row>
            <Col><Button>Log in with Facebook</Button></Col>
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

export default Login;
