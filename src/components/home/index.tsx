import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "../header";
const HomeComponent = () => {
    return (
        <div className={styles.container}>
            <HeaderComponent/>
            <picture className={styles.img_background}>
                <source media="(min-width:1024px)" srcSet="img_pink_flowers.jpg"/>
                <img src={require("../../assets/images/img.png")} alt="Flowers" />
            </picture>
        </div>
    );
};

export default HomeComponent;