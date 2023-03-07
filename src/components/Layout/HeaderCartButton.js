import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

export const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Yor Cart</span>
        <span className={styles.badge}>3</span>
    
    </button>
  )
}
