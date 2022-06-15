import React from "react";
import styles from "./styles.module.scss";
import HeaderComponent from "../header";
const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <picture className={styles.img_background}>
      <HeaderComponent />
        <source media="(min-width:1024px)" srcSet="" />
        <img src={require("../../assets/images/img.png")} alt="Flowers" />
      </picture>
    </div>
  );
};

export default HomeComponent;
