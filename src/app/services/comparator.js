const comparePrice = (price1, price2) => (price1 < price2 ? price1 : price2);

const compare = (items) => {
  const defaultItem = { ...items[0] };
  items.shift();
  return items.reduce(
    (acc, item) => ({
      price: comparePrice(acc.price, item.price),
    }),
    {
      price: defaultItem.price,
    },
  );
};

export default compare;
