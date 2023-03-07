import styles from "./Header.module.css";
import meals from "../../assets/mealsImg.jpg";

import React, { Fragment } from "react";
import { HeaderCartButton } from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>

        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
