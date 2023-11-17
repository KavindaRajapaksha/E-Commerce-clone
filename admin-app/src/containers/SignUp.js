import React from "react";
import Layout from "../components/layouts/index.js";
import { Form, Button, Container, Col,Row } from "react-bootstrap";
import "./SignIn.css";

export default function SignUp() {
  return (
    <div>
      <Layout>
        <div className="cardssi">
          <Container>
            <Col md={{ span: 6, offset: 3 }}>
              <Form className="signin">
                   <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name"  />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"   />
                      </Form.Group>
                    </Col>
                   </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Container>
        </div>
      </Layout>
    </div>
  );
}
