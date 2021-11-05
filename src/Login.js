import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";
import "./Login.css";

// Uniquement la structure - relié à aucune BDD évidemment 😃
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            className="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>

        <h6>
          Vous n'avez pas de compte, <a href="/Inscription">inscrivez vous</a>
        </h6>
      </Form>
    </div>
  );
}

export default Login;
