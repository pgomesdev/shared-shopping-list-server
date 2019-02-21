const Mutation = {
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
};

module.exports = Mutation;