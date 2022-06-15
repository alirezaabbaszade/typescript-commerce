import React from 'react';
import styles from "./styles.module.scss";

const Buttons = () => {
    return (
        <div className={styles.buttons}>
            <button>Sign up</button>
            <button>Create Account</button>
        </div>
    );
};

export default Buttons;