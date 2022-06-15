import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "./header";
import MenuComponent from "./menu";
const StoreComponent = () => {
    return (
        <div className={styles.container}>
            <HeaderComponent/>
            <MenuComponent/>
        </div>
    );
};

export default StoreComponent;