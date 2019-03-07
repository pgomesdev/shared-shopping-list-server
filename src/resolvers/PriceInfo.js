const PriceInfo = {
  item: async (parent, args, context, info) => {
    const items = await context.prisma.items({
      where: {
        priceInfo_some: {
          id: parent.id,
        },
      },
    });

    return items[0];
  },
};

module.exports = PriceInfo;
