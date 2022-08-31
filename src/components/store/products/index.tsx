import React from 'react';
import {Global} from "../../../libs/responses";
import styles from './styles.module.scss'
import ImageComponent from "../../ui/ImageCompontnt";

type Props = {
    products: Array<Global.Products>
}
const ProductsComponent = ({products}: Props) => {
    console.log(products)
    return (
        <section className={styles.productsContainer}>
            {products?.map((product) => {
                return (
                    <div className={styles.product}>
                        <ImageComponent src={product?.image}/>
                        <div>
                            <p>{product?.title}</p>
                            <p>{product?.price}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default ProductsComponent;