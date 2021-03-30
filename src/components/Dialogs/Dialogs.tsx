import React from "react";
import s from "./Dialogs.module.css"
import store, {ActionsTypes, MessageType} from "../../redux/state";
import Message from "./Message/Message";

type DialogsPropsType = {
    messages: MessageType[]
    messageForNewDialog: string
    dispatch: (action: ActionsTypes) => void
    updateNewMessageText: (newMessage: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return <div className={s.dialogs}>
        <Message dispatch={store.dispatch.bind(store)}
                 messageForNewDialog={props.messageForNewDialog}
                 message={props.messages}
                 updateNewMessageText={props.updateNewMessageText}
        />
    </div>
}


export default Dialogs;