import React from 'react';
import styles from './styles.module.scss'
const MenuComponent = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>All</li>
                <li>Apparel</li>
                <li>Dress</li>
                <li>Tshirt</li>
                <li>Bag</li>
            </ul>
        </div>
    );
};

export default MenuComponent;