import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContex from "../store/cart-contex";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

  const cartCtx = useContext(CartContex);
  
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curentNumber, item) => {
    return curentNumber + item.amount;
  }, 0);


  const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.lenght === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    },300)


    return () => {
      clearTimeout(timer);
    }
    
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
