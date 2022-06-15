import React from "react";
import styles from "./styles.module.scss";
import HeaderComponent from "../header";
import Logo from "../logo";
import Buttons from "../buttons";

type Props = {
    navigateLogin: () => void;
    navigateSignUp: () => void;
}
const HomeComponent = (props: Props) => {

    return (
        <div className={styles.container}>
            <picture className={styles.img_background}>
                <HeaderComponent/>
                <Logo/>
                <Buttons {...props}/>
                <img src={require("../../assets/images/homepage-background.png")} alt="Flowers"/>
                <source media="(min-width:1024px)" srcSet=""/>
            </picture>
        </div>
    );
};

export default HomeComponent;
