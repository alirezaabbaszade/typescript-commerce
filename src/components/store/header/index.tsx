import React from 'react';
import styles from './styles.module.scss';

const HeaderComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_right}>
                <span className="material-icons">add_shopping_cart</span>
                <span className="material-icons-outlined">account_circle</span>
            </div>
            <div className={styles.container_center}>
                <img src={require("../../../assets/images/logo.png")} alt="logo"/>
            </div>
            <div className={styles.container_left}>
                <span className="material-icons">search</span>
            </div>
        </div>
    );
};

export default HeaderComponent;