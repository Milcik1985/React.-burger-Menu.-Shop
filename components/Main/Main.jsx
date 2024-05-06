import styles from "../Main/Main.module.css";
import ProductWrapper from "../ProductWrapper/ProductWrapper";
import References from "../References/References";

const Main = () => {
  return (
    <div className={styles.main}>
      <References />
      <ProductWrapper />
    </div>
  );
};

export default Main;
