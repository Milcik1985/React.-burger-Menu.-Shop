import React, { useState } from "react";
import styles from "../MobileMenu/MobileMenu.module.css";
import burgerBtn from "../../../assets/burger-menu.svg";
import SocialMediaLogos from "@/components/Logos/SocialMediaLogos/SocialMediaLogos";

const MobileMenu = () => {
  const [isDisplayedMobileMenu, setDisplayedMobileMenu] = useState(false);

  const onBurgerBtnClick = () => {
    console.log("Burger button clicked");
    setDisplayedMobileMenu(!isDisplayedMobileMenu);
  };

  return (
    <div
      className={`${styles.menuBar} ${
        isDisplayedMobileMenu ? styles.active : ""
      }`}
    >
      <button className={styles.burgerBtn} onClick={onBurgerBtnClick}>
        <img src={burgerBtn.src} />
      </button>

      <div
        className={`${styles.mobileMenu} ${
          isDisplayedMobileMenu ? styles.active : ""
        }`}
      >
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Lookbook</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
