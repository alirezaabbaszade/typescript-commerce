import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "../header";
import FormSignUp from "./form";
const RegisterComponent = () => {
    return (
        <picture className={styles.img_background}>
            <HeaderComponent/>
            <FormSignUp/>
            <img src={require("../../assets/images/signup-background.png")} alt="Flowers"/>
            <source media="(min-width:1024px)" srcSet=""/>
        </picture>
    );
};

export default RegisterComponent;