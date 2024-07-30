import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
<<<<<<< HEAD
import { ADD_USER } from "../utils/mutations";
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
=======
import { CREATE_USER } from "../utils/mutations";
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

<<<<<<< HEAD
  const [addUser, { loading }] = useMutation(ADD_USER, {
    onCompleted: (data) => {
      // Store the token in localStorage
      console.log("Signup successful", data.addUser.user);
      Auth.login(data.addUser.token);
=======
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      // Store the token in localStorage
      console.log("Signup successful", data.createUser.user);
      Auth.login(data.createUser.token);
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
      // redirect the user or update the app state here
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username ||!email ||!password ||!confirmPassword) {
      setErrorMessage("Please fill out all fields");
      return;
    }
    if (password!== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      await createUser({ variables: { username, email, password } });
    } catch (e) {
      console.error("Signup error", e);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
<<<<<<< HEAD
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      <Icon name='heartbeat' /> Sign-up and start adopting animals!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email" id="password" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' id="confirmpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <Button color='teal' fluid size='large'> Login </Button>
        </Segment>
      </Form>
      <Message>
        Already a member? <a href='/'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
=======
    <div className="signup-container">
      <h2>Sign Up</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
  );
}

export default SignUp;