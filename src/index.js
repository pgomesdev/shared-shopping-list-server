require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => `This is the API of Shared Shopping List`,
    listShoppingLists: (root, args, context, info) => {
      return context.prisma.shoppingLists();
    },
  },
  Mutation: {
    createShoppingList: (root, { name }, context) => {
      return context.prisma.createShoppingList({
        name,
        items: {
          set: [],
        },
        store: {
          set: [],
        },
      })
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
