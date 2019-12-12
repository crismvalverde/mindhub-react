import React, { Component } from 'react'
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Profile from './img/profilepic.jpg'
import axios from 'axios';

class Login extends Component {
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
    const info = this.state
    // const data = [...this.state.data, info];
    // this.setState({
    //   data: data
    // })
    console.log(info);
    // axios
    //     .post('http://localhost:5000/users/', info)
    //     .then(res =>
    //       console.log(res)

    //     )
  }
  // function(){
  //   return this.state.redirect?
  //    null
  //    : <redirect to
  // }

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
          {/* <Row>
            <Col>
              <Image src={Profile} width="150px" roundedCircle alt="Add Photo" />
            </Col>
          </Row>
          <br /> */}
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
            <Button type="submit">OK</Button>
          </Form>
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Login