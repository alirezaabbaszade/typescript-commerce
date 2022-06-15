import React, {AllHTMLAttributes} from 'react';
import clsx from "clsx";
import styles from './styles.module.scss';

type Props = {
    register?: any;
    error?: any;
    type?: any;
    placeholder?: any
} & AllHTMLAttributes<HTMLInputElement>
const Input = (props: Props) => {
    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                {...props.register}
                className={clsx(styles.input)}
            >
                {props?.error && <span>{props.error}</span>}
            </input>
        </>
    );
};

export default Input;