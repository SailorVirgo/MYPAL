const typeDefs = `
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        pets: [Pet]
    }

    type Pet {
<<<<<<< HEAD
    _id: ID
    name: String
    type: String
=======
    _id: ID!
    name: String!
    type: String!
    age: Int!
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
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
<<<<<<< HEAD
    addPet(name: String, type: Boolean, isClean: Boolean, playedWith: Boolean, fed: Boolean): Pet
    
    login(email: String!, password: String!): Auth
=======
    createPet(name: String, type: Boolean, age: Int!, isClean: Boolean, playedWith: Boolean, hunger: Int): Pet
    updatePet(id: ID!, name: String, type: String, age: Int, isClean: Boolean, playedWith: Boolean, hunger: Int): Pet
    login(email: String!, password: string!): Auth
>>>>>>> e8ccd78df83c1d7a12369366a620aadfa4b7b1fa
    }
`;
module.exports = typeDefs;