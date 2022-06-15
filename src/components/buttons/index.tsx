import React from 'react';
import styles from "./styles.module.scss";
type Props = {
    navigateLogin: () => void;
    navigateSignUp: () => void;
}
const Buttons = (props: Props) => {

    return (
        <div className={styles.buttons}>
            <button onClick={props.navigateLogin}>Sign In</button>
            <button onClick={props.navigateSignUp}>Create Account</button>
        </div>
    );
};

export default Buttons;