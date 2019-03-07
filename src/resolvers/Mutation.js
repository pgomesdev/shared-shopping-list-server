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
    console.log(data)
    return context.prisma.createItem({
      name: data.name,
      quantity: data.quantity,
      priceInfo: {
        create: data.priceInfo,
      },
      shoppingList: {
        connect: {
          id: data.shoppingListId,
        },
      },
    }, info)
  },
  updateItem: (_, { id, name }, context, info) => {
    const data = {
      name,
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