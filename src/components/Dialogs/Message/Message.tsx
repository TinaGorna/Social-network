import React, {ChangeEvent} from "react";
import s from "./../Dialogs.module.css"
import {ActionsTypes, MessageType} from "../../../outside/store";
import DialogItem from "../DialogItem/DialogItem";
import {addMessageAC} from "../../../outside/dialogs-reducer";

export type MessagesType = {
    messageForNewDialog: string,
    updateNewMessageText: (newMessage: string) => void
    message: MessageType[],
    dispatch: (action: ActionsTypes) => void
}

export const Message: React.FC<MessagesType> = (props) => {
    let dialogElement =
        props.message.map(d => <DialogItem key={d.id} name={d.message} id={d.id}/>)

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
            <button onClick={addMessage}>Send</button>
            {dialogElement}
        </div>
    </div>
}


export default Message;