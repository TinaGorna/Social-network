import React from 'react';
import styles from './FormControl.module.css'

type TextAreaPropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<TextAreaPropsType> = ({ input, meta, ...props }) => {
    // console.log(meta)
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Input: React.FC<TextAreaPropsType> = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};