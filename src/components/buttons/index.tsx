import React from 'react';
import styles from "./styles.module.scss";
import {useNavigate} from "react-router-dom";
import {ROUTE_LOGIN, ROUTE_REGISTER} from "../../constants/routes";
type Props = {
    navigateLogin: () => void;
    navigateSignUp: () => void;
}
const Buttons = (props: Props) => {

    return (
        <div className={styles.buttons}>
            <button onClick={props.navigateSignUp}>Sign up</button>
            <button onClick={props.navigateLogin}>Create Account</button>
        </div>
    );
};

export default Buttons;