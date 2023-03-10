import styles from "./Header.module.css";
import meals from "../../assets/mealsImg.jpg";

import React from "react";
import  HeaderCartButton  from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Delivery Meals</h1>

        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
