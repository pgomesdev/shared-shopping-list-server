const Item = {
  priceInfo: (parent, args, context, info) => {
    return context.prisma.priceInfoes({
      where: {
        item: {
          id: parent.id,
        },
      },
    }, info)
  },
  shoppingList: async (parent, args, context, info) => {
    const shoppingList = await context.prisma.shoppingLists({
      where: {
        items_some: {
          id: parent.id,
        },
      },
    }, info);

    console.log(shoppingList)

    return shoppingList[0];
  },
};

module.exports = Item;
