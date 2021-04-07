import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../outside/dialogs-reducer";
import Dialogs from "../Dialogs";
import StoreContext from "../../../StoreContext";

export type MessagesType = {

}

export const DialogsContainer: React.FC<MessagesType> = () => {
    return <StoreContext.Consumer>
        { store => {
            let state = store.getState().dialogsPage;

            const addMessage = () => {
                store.dispatch(addMessageAC(state.messageForNewDialog))
            }
            const newMessageChangeHandler = (text: string) => {
                store.dispatch(updateNewMessageTextAC(text))
            }
            return <Dialogs updateNewMessageText={newMessageChangeHandler}
                            addMessage={addMessage}
                            state={state}/>
        }
    }
    </StoreContext.Consumer>

}


export default DialogsContainer;