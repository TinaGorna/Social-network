import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../outside/dialogs-reducer";
import {StoreType} from "../../../outside/redux-store";
import Dialogs from "../Dialogs";

export type MessagesType = {
    store: StoreType
}

export const DialogsContainer: React.FC<MessagesType> = (props) => {
    let state = props.store.getState().dialogsPage;

    const addMessage = () => {
        props.store.dispatch(addMessageAC(state.messageForNewDialog))
    }
    const newMessageChangeHandler = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }

    return (
        <Dialogs updateNewMessageText={newMessageChangeHandler}
                 addMessage={addMessage}
                 state={state}
        />
    )
}


export default DialogsContainer;