import React from "react";
import s from "./Dialogs.module.css"
import {addMessage, MessageType} from "../../redux/state";
import Message from "./Message/Message";


type DialogsPropsType = {
    addMessage: () => void
    messages: MessageType[]
    messageForNewDialog: string
    updateNewMessageText: (newMessage: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return <div className={s.dialogs}>
        <Message addMessage={addMessage}
                 messageForNewDialog={props.messageForNewDialog}
                 updateNewMessageText={props.updateNewMessageText}
                 message={props.messages}
        />
    </div>
}


export default Dialogs;