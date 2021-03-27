import React from "react";
import s from "./Dialogs.module.css"
import {MessageType} from "../../redux/state";
import Message from "./Message/Message";

type DialogsPropsType = {
    addMessage: () => void
    messages: MessageType[]
    messageForNewDialog: string
    updateNewMessageText: (newMessage: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    function addMessage() {
        props.addMessage();
    }

    return <div className={s.dialogs}>
        <Message addMessage={addMessage}
                 messageForNewDialog={props.messageForNewDialog}
                 updateNewMessageText={props.updateNewMessageText}
                 message={props.messages}
        />
    </div>
}


export default Dialogs;