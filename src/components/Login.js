import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#F4F9F9",
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Form
              onSubmit={loginSubmit}
              style={{
                padding: 40,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <h2 style={{ marginBottom: 20 }}>Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Form.Text style={{ margin: 20 }}>
                Don't have an account?{" "}
                <Link
                  to={{
                    pathname: "/register",
                  }}
                >
                  Register here
                </Link>
              </Form.Text>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
