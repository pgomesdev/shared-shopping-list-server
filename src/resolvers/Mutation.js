const Mutation = {
  createShoppingList: (_, { name }, context, info) => {
    return context.prisma.createShoppingList({
      name,
    }, info)
  },
  updateShoppingList: (_, { id, name }, context, info) => {
    const data = {
      name,
    }

    const where = {
      id,
    }

    return context.prisma.updateShoppingList({ data, where }, info)
  },
  deleteShoppingList: (_, { id }, context, info) => {
    const where = {
      id,
    }

    return context.prisma.deleteShoppingList(where, info)
  },
  createItem: (_, { data }, context, info) => {
    return context.prisma.createItem({
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      shoppingList: {
        connect: {
          id: data.shoppingListId,
        },
      },
    }, info)
  },
  updateItem: (_, { id, name, quantity, price }, context, info) => {
    const data = {
      name,
      quantity,
      price,
    }

    const where = {
      id,
    }

    return context.prisma.updateItem({ data, where }, info)
  },
  deleteItem: (_, { id }, context, info) => {
    const where = {
      id,
    }

    return context.prisma.deleteItem(where, info)
  }
};

module.exports = Mutation;