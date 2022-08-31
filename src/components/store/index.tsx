import React from 'react';
import styles from './styles.module.scss';
import HeaderComponent from "./header";
import MenuComponent from "./menu";
import SliderComponent from "./slider";
import ProductsComponent from "./products";
import {Global} from "../../libs/responses";

type Props = {
    products:Array<Global.Products>
}
const StoreComponent = (props: Props) => {
    return (
        <div className={styles.container}>
            <HeaderComponent/>
            <MenuComponent/>
            <SliderComponent/>
            <ProductsComponent products={props?.products}/>
        </div>
    );
};

export default StoreComponent;