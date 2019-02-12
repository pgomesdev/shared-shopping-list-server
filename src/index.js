require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => `This is the API of Shared Shopping List`,
    listShoppingLists: (_, args, context, info) => {
      return context.prisma.shoppingLists();
    },
    shoppingList: (_, { id }, context) => {
      return context.prisma.shoppingList({
        id,
      })
    },
  },
  Mutation: {
    createShoppingList: (_, { name }, context) => {
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
    updateShoppingList: (_, { id, name }, context) => {
      const data = {
        name,
      }

      const where = {
        id,
      }

      return context.prisma.updateShoppingList({ data, where })
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
