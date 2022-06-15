import React from 'react';
import styles from './styles.module.scss'
import Input from "../../Input";

const FormSignUp = () => {
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
                <div className={styles.form_container_confirmPassword}>
                    <Input type="password" placeholder="Confirm Password"/>
                    <span className="material-icons">lock</span>
                </div>
                <Input type="submit" value="1122"/>
                <p>
                    Already have an account? Sign in
                </p>
            </form>

        </div>
    );
};

export default FormSignUp;