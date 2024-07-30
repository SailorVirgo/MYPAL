import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
<<<<<<< HEAD
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
=======
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      // Store the token in localStorage
      console.log("Login successful", data.login.user);
      Auth.login(data.login.token);
      // redirect the user or update the app state here
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      return;
    }
    try {
      await login({ variables: { email, password } });
    } catch (e) {
      console.error("Login error", e);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
<<<<<<< HEAD
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      <Icon name='heartbeat' /> Log-in to care for your Animals!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button color='teal' fluid size='large'> Login </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
=======
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
  );
}

export default Login;