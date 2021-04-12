import React from "react";
import s from "./Dialogs.module.css"
import {DialogType, MessageType} from "../../outside/store";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messageForNewDialog: string
    messages: Array<MessageType>
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const dialogItem = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.messages.map(m => <Message message={m.message}/>)


    const addMessage = () => {
        props.addMessage();
    }

    const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.updateNewMessageText(newMessage)
    }
    // if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogItem}
            </div>

            <div className={s.messages}>
                {message}
                <div>
                    <div>
                        <textarea onChange={onChangeMessage}
                                  value={props.messageForNewDialog}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Dialogs;