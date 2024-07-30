import { gql } from "@apollo/client";
// Define the login mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;
<<<<<<< HEAD
export const ADD_USER = gql`
=======
export const CREATE_USER = gql`
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        email
        userName
      }
    }
  }
`;