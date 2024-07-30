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
export const CREATE_USER = gql`
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

export const UPDATE_USER = gql`
  mutation UpdateUser($userName: String, $email: String, $password: String) {
    updateUser(userName: $userName, email: $email, password: $password) {
      _id
      userName
      email
    }
  }
`;

export const CREATE_PET = gql`
  mutation CreatePet($name: String!, $type: Boolean!, $age: Int!, $isClean: Boolean, $playedWith: Boolean, $hunger: Int) {
    addPet(name: $name, type: $type, age: $age, isClean: $isClean, playedWith: $playedWith, hunger: $hunger) {
      _id
      name
      type
      age
      isClean
      playedWith
      hunger
    }
  }
`;

export const UPDATE_PET = gql`
  mutation UpdatePet($id: ID!, $name: String, $type: String, $age: Int, $isClean: Boolean, $playedWith: Boolean, $hunger: Int) {
    updatePet(id: $id, name: $name, type: $type, age: $age, isClean: $isClean, playedWith: $playedWith, hunger: $hunger) {
      _id
      name
      type
      age
      isClean
      playedWith
      hunger
    }
  }
`;
