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


