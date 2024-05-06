import styles from "../Cart/Cart.module.css";
import cartLogo from "../../../assets/cart-shopping-svgrepo-com.svg";

const CartLogo = () => {
  return (
    <div className={styles.cart}>
      <a href="#">
        <img src={cartLogo.src} alt="cart" />
      </a>
    </div>
  );
};

export default CartLogo;
