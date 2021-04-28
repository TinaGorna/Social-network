import React from "react";
import styles from "./FormControl.module.css"

type TextAreaPropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<TextAreaPropsType> = ({input, meta: {touched, error}, ...props}) => {
    // console.log(meta)
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <textarea {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Input: React.FC<TextAreaPropsType> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <input {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    );
};
