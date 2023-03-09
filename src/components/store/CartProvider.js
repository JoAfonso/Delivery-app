import CartContex from "./cart-contex";

const CartProvider = (props) => {
  const addItemCartHandler = (item) => {};
  const removeItemCartHandler = (id) => {};

  const cartContex = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContex.Provider value={cartContex}>
      {props.chilcren}
    </CartContex.Provider>
  );
};

export default CartProvider;
