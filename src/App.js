import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import CartProvider from "./components/store/CartProvider";
import styles from './components/UI/Modal.module.css' 

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    document.body.classList.add(styles.modalOpen);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
    document.body.classList.remove(styles.modalOpen);
  };

  return (
    
    
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
    
  );
}

export default App;