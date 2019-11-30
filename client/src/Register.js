import React, { Component } from 'react'
import Footer from './footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Create Account</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image width="100px" roundedCircle alt="Add Photo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <form>
                <label>
                  Username:
                <input type="text" name="username" />
                </label>
                <br />
                <label>
                  Password:
                <input type="text" name="password" />
                </label>
                <br />
                <label>
                  Email:
                <input type="text" name="email" />
                </label>
                <br />
                <label>
                  First Name:
                <input type="text" name="first-name" />
                </label>
                <br />
                <label>
                  Last Name:
                <input type="text" name="last-name" />
                </label>
                <br />
                <label>
                  Country:
                <select>
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                  </select>
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  I agree to MYtinerary's <Link>Terms and Conditions</Link>
                </label>
              </form>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Register