const typeDefs = `
    type User {
        _id: ID!
        userName: String!
        email: String!
        password: String!
        pets: [Pet]
    }

    type Pet {
    _id: ID!
    name: String!
    type: String!
    age: Int!
    isClean: Boolean
    playedWith: Boolean
    hunger: Int
    }

    type Auth {
    token: ID!
    user: User
    }

    type Query {
    pet(_id: ID!): Pet
    user: User

    }

    type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    addPet(name: String, type: Boolean, age: Int!, isClean: Boolean, playedWith: Boolean, hunger: Int): Pet
    updatePet(id: ID!, name: String, type: String, age: Int, isClean: Boolean, playedWith: Boolean, hunger: Int): Pet
    
    login(email: String!, password: String!): Auth
 }
`;
module.exports = typeDefs;
