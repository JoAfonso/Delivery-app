import styles from "./Header.module.css";
import meals from "../../assets/mealsImg.webp";
import logo from "../../assets/logo.png";

import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>FoodRun</h1>
          <img src={logo} alt="Logo da FoodRun"  />
        </div>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
