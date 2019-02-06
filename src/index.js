const { GraphQLServer } = require('graphql-yoga');

let shoppingList = [
  {
    name: 'Mercado',
    items: [0, 1],
    store: ['Walmart', 'Extra'],
  },
  {
    name: 'PC Gamer',
    items: [2, 3],
    store: ['Walmart', 'Extra'],
  }
];

let items = [
  {
    name: 'Arroz',
    price: null,
    quantity: null,
  },
  {
    name: 'Monster',
    price: 6.99,
    quantity: 10,
  },
  {
    name: 'Mouse',
    price: null,
    quantity: null,
  },
  {
    name: 'Teclado',
    price: null,
    quantity: 1,
  }
];

const resolvers = {
  Query: {
    info: () => `This is the API of Shared Shopping List`,
    listShoppingList: () => shoppingList,
    shoppingList
  },
  ShoppingList: {
    items: (parent) => {
      return parent.items.map(item => items[item])
    },
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
