import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser {
    user {
      _id
      userName
      email
      pets {
        _id
        name
        type
        age
        isClean
        playedWith
        hunger
      }
    }
  }
`;

export const GET_PET = gql`
  query GetPet($id: ID!) {
    pet(_id: $id) {
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

export const CREATE_USER = gql`
  mutation CreateUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
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

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
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

export default {
  GET_USER,
  GET_PET,
  CREATE_USER,
  UPDATE_USER,
  CREATE_PET,
  UPDATE_PET,
  LOGIN,
};

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;