import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "./header";
import MenuComponent from "./menu";
import SliderComponent from "./slider";
const StoreComponent = () => {
    return (
        <div className={styles.container}>
            <HeaderComponent/>
            <MenuComponent/>
            <SliderComponent/>
        </div>
    );
};

export default StoreComponent;