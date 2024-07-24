const { User, Pet } = require('../models');
const { signToken, AuthenticationError} = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PfXutHfg0rPoMOJTS9WAq4iOWFBFmmztIBLHhnHnQH9bwZzK7j6WFEi34AttGYakRmfxsDB8GgQU7fSrXJIlvFf00QJ6tbvff')

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
              .populate({path:'pets',
                options: {sort:{name: 1}}
              });
      
              return user;
            }
      
            throw AuthenticationError;
          },
          pet: async (parent, { _id }, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id).populate({

                })
                return user.pets.id(_id);
            }
          },
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