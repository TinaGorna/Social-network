import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
import {DialogType} from "../../../outside/dialogs-reducer";

const DialogItem = (props: DialogType) => {
    let path = '/paviedamliennia/' + props.id

    return (
        <div className={styles.dialog}>
            <img src={props.avatar} alt='dialog' />
            <div className={styles.dialogName}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}

export default DialogItem;