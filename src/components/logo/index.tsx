import React from 'react';
import styles from './styles.module.scss'
const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
    );
};

export default Logo;