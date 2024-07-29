const typeDefs = `
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        pets: [Pet]
    }

    type Pet {
    _id: ID
    name: String
    type: String
    isClean: Boolean
    playedWith: Boolean
    fed: Boolean
    }

    type Auth {
    token: ID!
    user: User
    }

    type Query {
    pets: [Pet]
    user: User

    }

    type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    addPet(name: String, type: Boolean, isClean: Boolean, playedWith: Boolean, fed: Boolean): Pet
    
    login(email: String!, password: String!): Auth
    }
`;
module.exports = typeDefs;