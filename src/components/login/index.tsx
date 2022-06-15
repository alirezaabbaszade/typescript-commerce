import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "../header";
import FormLogin from "./form";
const LoginComponent = () => {
    return (
        <picture className={styles.img_background}>
            <HeaderComponent/>
            <FormLogin/>
            <img src={require("../../assets/images/login-background.png")} alt="Flowers"/>
            <source media="(min-width:1024px)" srcSet=""/>
        </picture>
    );
};

export default LoginComponent;