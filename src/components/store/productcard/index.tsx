import React from 'react';
import styles from './styles.module.scss'
type Props = {

}

const ProductCardComponent = (props: Props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.product_right}>
                        <img src={require("../../../assets/images/product-image.png")} alt=""/>
                        <div className={styles.product_right_desc}>
                            <p>$70</p>
                            <p>Monroe Top</p>
                        </div>
                    </div>
                    <div className={styles.product_left}>
                        <img src={require("../../../assets/images/product-image.png")} alt=""/>
                        <div className={styles.product_left_desc}>
                            <p>$70</p>
                            <p>Monroe Top</p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.product_right}>
                        <img src={require("../../../assets/images/product-image.png")} alt=""/>
                        <div className={styles.product_right_desc}>
                            <p>$70</p>
                            <p>Monroe Top</p>
                        </div>
                    </div>
                    <div className={styles.product_left}>
                        <img src={require("../../../assets/images/product-image.png")} alt=""/>
                        <div className={styles.product_left_desc}>
                            <p>$70</p>
                            <p>Monroe Top</p>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.product_right}>
                        <img src={require("../../../assets/images/product-image.png")} alt=""/>
                        <div className={styles.product_right_desc}>
                            <p>$70</p>
                            <p>Monroe Top</p>
                        </div>
                    </div>
                    <div className={styles.product_left}>
                        <img src={require("../../../assets/images/product-image.png")} alt=""/>
                        <div className={styles.product_left_desc}>
                            <p>$70</p>
                            <p>Monroe Top</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCardComponent;