import React from 'react';


import styles from './Message.module.css';
import {MessageType} from "../../../outside/dialogs-reducer";

const Message = (props: MessageType) => {
    return (
        <div className={(props.message === 'I can bring dinner tonight, what do you think?') ? styles.message : styles.myMessage}>
            {props.message}
            <div className={styles.messageTime}>
                {props.time}
            </div>
        </div>
    )
}

export default Message