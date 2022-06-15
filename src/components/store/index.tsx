import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "./header";
import MenuComponent from "./menu";
import SliderComponent from "./slider";
import ProductCardComponent from "./productcard";
type Props = {

}
const StoreComponent = (props : Props) => {
    return (
        <div className={styles.container}>
            <HeaderComponent/>
            <MenuComponent/>
            <SliderComponent/>
            <ProductCardComponent />
        </div>
    );
};

export default StoreComponent;