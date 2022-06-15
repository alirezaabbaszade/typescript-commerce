import React from 'react';
import styles from './styles.module.scss'
const SliderComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_image} >
                <img src={require("../../../assets/images/slider-image.png")} alt="slider"/>
                <div className={styles.container_image_desc}>
                    <p>SURF OUR LOOKBOOK</p>
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;