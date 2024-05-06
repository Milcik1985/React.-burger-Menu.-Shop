import { useState } from "react";
import styles from "../ProductCard/ProductCard.module.css";

const ProductCard = ({ imgUrl, title, price, location, unitsLeft }) => {
  const [showLocation, setLocation] = useState(false);

  const toggleLocation = () => {
    setLocation(!showLocation);
  };

  const handleClick = () => {
    console.log(title);
  };

  return (
    <div className={styles.main} onClick={() => handleClick()}>
      {unitsLeft > 0 ? (
        <>
          <img src={imgUrl} alt={title} />
          <h3>{title}</h3>
          <h3>{price}</h3>
          <h3>Left items: {unitsLeft}</h3>
          <button onClick={toggleLocation}>
            {showLocation ? "Hide Location" : "Show Location"}
          </button>
          {showLocation && <p>{location}</p>}
        </>
      ) : (
        <div>
          <img src={imgUrl} alt={title} />
          <h3>{title}</h3>
          <h3>{price}</h3>
          <p>Šiuo metu prekės neturime</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
