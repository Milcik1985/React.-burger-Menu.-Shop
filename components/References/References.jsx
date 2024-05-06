import styles from "../References/References.module.css";

const References = () => {
  return (
    <div className={styles.main}>
      <a href="#">Tops</a>
      <a className={styles.reference} href="#">
        Bottoms
      </a>
      <a className={styles.reference} href="#">
        Sale
      </a>
    </div>
  );
};

export default References;
