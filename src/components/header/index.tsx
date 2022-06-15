import React from "react";
import styles from "./styles.module.scss";

const HeaderComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icon_bar}>
                <div className={styles.icon_bar_left}>
                    <p>9:41</p>
                </div>
                <div className={styles.icon_bar_right}>
                    <span className="material-icons">battery_full</span>
                    <span className="material-icons">wifi</span>
                    <span className="material-icons">signal_cellular_alt</span>
                    <div/>
                </div>

            </div>
        </div>
    );
};

export default HeaderComponent;
