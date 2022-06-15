import React from "react";
import styles from "./styles.module.scss";
import HeaderComponent from "../header";
import Logo from "../logo";
import Buttons from "../buttons";
const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <picture className={styles.img_background}>
          <HeaderComponent />
          <Logo/>
          <Buttons/>
          <img src={require("../../assets/images/img.png")} alt="Flowers" />
          <source media="(min-width:1024px)" srcSet="" />
      </picture>
    </div>
  );
};

export default HomeComponent;
