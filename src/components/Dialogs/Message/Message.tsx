import React, {ChangeEvent} from "react";
import s from "./../Dialogs.module.css"
import {ActionsTypes, addMessageAC, MessageType} from "../../../redux/state";
import DialogItem from "../DialogItem/DialogItem";

export type MessagesType = {
    messageForNewDialog: string,
    updateNewMessageText: (newMessage: string) => void
    /*addMessage: () => void,*/
    message: MessageType[],
    dispatch: (action: ActionsTypes) => void
}

export const Message: React.FC<MessagesType> = (props) => {
    let dialogElement =
        props.message.map(d => <DialogItem name={d.message} id={d.id}/>)

    const addMessage = () => {
        props.dispatch(addMessageAC(props.messageForNewDialog))
    }
    const newMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
    }

    return <div className={s.newMessage}>
        <div>
            <textarea value={props.messageForNewDialog} onChange={newMessageChangeHandler}/>
        </div>
        <div>
            <button onClick={addMessage}>New message</button>
            {dialogElement}
        </div>
    </div>
}


export default Message;