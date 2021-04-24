import React from 'react';


import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import styles from './Dialogs.module.css';
import AddMessageReduxForm from './AddMessageForm/AddMessageForm';
import {DialogsPagePropsType} from "../../outside/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPagePropsType
    sendMessage: (newMessageBody: string) => void
}

export type AddMessagePropsType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />)

    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} time={m.time} />)

    const addNewMessage = (values: AddMessagePropsType) => {
        props.sendMessage(values.newMessageBody)
        values.newMessageBody = " "
    }

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs