import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const RegisterSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
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
              onSubmit={RegisterSubmit}
              style={{
                padding: 40,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            >
              <h2 style={{ marginBottom: 20 }}>Create Account</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
              <Form.Group className="mb-3" controlId="formBasicRegister">
                <Form.Text style={{ margin: 20 }}>
                  Already have an account?{" "}
                  <Link
                    to={{
                      pathname: "/login",
                    }}
                  >
                    Login here
                  </Link>
                </Form.Text>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
