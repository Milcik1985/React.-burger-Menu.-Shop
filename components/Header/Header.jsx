import styles from "../Header/Header.module.css";
import NavBar from "./NavBar/NavBar";
import Logo from "../Logo/Logo";
import Logos from "../Logos/Logos";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  return (
    <header className={styles.main}>
      <NavBar />
      <Logo />
      <Logos />
      <MobileMenu />
    </header>
  );
};

export default Header;
