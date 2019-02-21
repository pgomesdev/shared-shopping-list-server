const Mutation = {
  createShoppingList: (_, { name, items }, context, info) => {
    return context.prisma.createShoppingList({
      name,
    }, info)
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