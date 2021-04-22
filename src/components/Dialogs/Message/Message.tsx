import React from 'react';
import styles from './Message.module.css';
import {MessageType} from "../../../outside/dialogs-reducer";

const Message = (props: MessageType) => {
    return (
        <div className={(props.message === 'Are you packing the bag?') ? styles.message : styles.myMessage}>
            {props.message}
            <div className={styles.messageTime}>
                {props.time}
            </div>
        </div>
    )
}

export default Message
