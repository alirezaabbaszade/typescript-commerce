import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "./header";
const StoreComponent = () => {
    return (
        <div className={styles.container}>
            <HeaderComponent/>
        </div>
    );
};

export default StoreComponent;