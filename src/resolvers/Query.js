const Query = {
  info: () => `This is the API of Shared Shopping List`,
  listShoppingLists: (_, args, context, info) => {
    return context.prisma.shoppingLists({}, info);
  },
  shoppingList: async (_, { id }, context, info) => {
    return context.prisma.shoppingList({
      id,
    }, info)
  },
};

module.exports = Query;