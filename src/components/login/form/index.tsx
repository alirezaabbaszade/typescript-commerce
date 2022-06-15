import React from 'react';
import styles from './styles.module.scss'
import Input from "../../Input";

const FormLogin = () => {
    return (
        <div className={styles.form_container}>
        <form>
            <div className={styles.form_container_email}>
                <Input type="email" placeholder="Email"/>
                <span className="material-icons-outlined">email</span>
            </div>
            <div className={styles.form_container_password}>
                <Input type="password" placeholder="Password"/>
                <span className="material-icons">lock</span>
            </div>
            <Input type="submit" value="submit"/>
            <p>
                Don’t have an account? Create account.
            </p>
        </form>

        </div>
    );
};

export default FormLogin;