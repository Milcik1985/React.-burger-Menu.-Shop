import { useState } from "react";
import styles from "../ProductWrapper/ProductWrapper.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductWrapper = () => {
  const products = [
    {
      id: 1,
      imgUrl:
        "https://dalstilius.lt/wp-content/uploads/2023/07/363023326_843072037476018_7737687487864764452_n-removebg-preview-2.png",
      title: "Black Tunic",
      price: "19.99 €",
      location: "Far Far Away",
      unitsLeft: 10,
    },
    {
      id: 2,
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/7/Blender-Shirt-PNG-Clipart.png",
      title: "Blouse",
      price: "29.99 €",
      location: "Far Far Away",
      unitsLeft: 20,
    },
    {
      id: 3,
      imgUrl:
        "https://www.vilebrequin.com/dw/image/v2/BBRG_PRD/on/demandware.static/-/Sites-vilebrequin-catalog-master/default/dw82afd768/images/CLMC3V72-200/CLMC3V72-200-back-3920x3920.png?sw=316&sh=316&sm=fit",
      title: "Red Pants",
      price: "10.99 €",
      location: "Far Far Away",
      unitsLeft: 15,
    },
    {
      id: 4,
      imgUrl:
        "https://www.pngall.com/wp-content/uploads/6/Sweater-PNG-Free-Image.png",
      title: "Sweater",
      price: "15.99 €",
      location: "Far Far Away",
      unitsLeft: 0,
    },
  ];

  return (
    <div className={styles.main}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imgUrl={product.imgUrl}
          title={product.title}
          price={product.price}
          location={product.location}
          unitsLeft={product.unitsLeft}
        />
      ))}
    </div>
  );
};

export default ProductWrapper;
