import React from "react";
import styles from "../Logos/Logos.module.css";
import SocialMediaLogos from "./SocialMediaLogos/SocialMediaLogos";
import CartLogo from "./Cart/Cart";

const Logos = () => {
  return (
    <div className={styles.container}>
      <SocialMediaLogos />
      <CartLogo />
    </div>
  );
};

export default Logos;
