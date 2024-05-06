import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Main />
    </div>
  );
};

export default MainPage;
