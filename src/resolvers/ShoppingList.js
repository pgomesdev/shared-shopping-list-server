const ShoppingList = {
  items: (parent, args, context, info) => {
    return context.prisma.items({
      where: {
        shoppingList: {
          id: parent.id,
        },
      },
    }, info);
  }
}

module.exports = ShoppingList;
