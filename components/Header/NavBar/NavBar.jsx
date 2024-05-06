import styles from "../NavBar/NavBar.module.css";
import burgerBtn from "../../../assets/burger-menu.svg";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
