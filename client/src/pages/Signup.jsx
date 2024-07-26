import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { CREATE_USER } from "../utils/mutations";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      // Store the token in localStorage
      console.log("Signup successful", data.createUser.user);
      Auth.login(data.createUser.token);
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
  );
}

export default SignUp;