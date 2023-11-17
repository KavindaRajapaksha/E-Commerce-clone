import React from "react";
import Layout from "../components/layouts/index.js";
import { Form, Button, Container,Col } from "react-bootstrap";
import "./SignIn.css";

export default function SignIn() {
  return (
    <Layout>
      <div className="cardssi" >
        <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="signin">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
  );
}
