import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContex from '../store/cart-contex';
import styles from './HeaderCartButton.module.css'

 const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.items.reduce((curentNumber, item) => {
    return curentNumber + item.amount;
  }, 0);


  return (
    <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Yor Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    
    </button>
  )
}
export default HeaderCartButton;