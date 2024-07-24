const { User, Pet } = require('../models');
const { signToken, AuthenticationError} = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PfXutHfg0rPoMOJTS9WAq4iOWFBFmmztIBLHhnHnQH9bwZzK7j6WFEi34AttGYakRmfxsDB8GgQU7fSrXJIlvFf00QJ6tbvff')

const resolvers = {
    Query: {

    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
    
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
            throw AuthenticationError;
            }
    
            const correctPw = await user.isCorrectPassword(password);
    
            if (!correctPw) {
            throw AuthenticationError;
            }
    
            const token = signToken(user);
    
            return { token, user };
        }
    }
};

module.exports = resolvers;