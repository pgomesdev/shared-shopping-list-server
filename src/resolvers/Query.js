const Query = {
  info: () => `This is the API of Shared Shopping List`,
  listShoppingLists: (_, args, context, info) => {
    return context.prisma.shoppingLists();
  },
  shoppingList: (_, { id }, context) => {
    return context.prisma.shoppingList({
      id,
    })
  },
};

module.exports = Query;