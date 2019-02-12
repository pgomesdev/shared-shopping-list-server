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
      const data = {
        name,
        items: {
          set: [],
        },
        store: {
          set: [],
        },
      }

      return context.prisma.createShoppingList(data)
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
    deleteShoppingList: (_, { id }, context) => {
      const where = {
        id,
      }

      return context.prisma.deleteShoppingList(where)
    }
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
