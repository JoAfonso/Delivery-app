import {useReducer} from "react";
import CartContext from "./cart-contex";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmaount = state.totalAmount + action.item.price * action.item.amount

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmaount
    };
  }
  return defaultCartState;
}; 



const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemCartHandler = (item) => {
    dispatchCartAction({type:"ADD_CART_ITEM", item: item})
  };
  const removeItemCartHandler = (id) => {
    dispatchCartAction({type:"REMOVE_CART_ITEM", id:id})};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
