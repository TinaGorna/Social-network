import React from "react";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "../../../outside/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";
import {ActionCreator} from "redux";
import {RouteStateType} from "../../../outside/redux-store";
import {DialogType, MessageType} from "../../../outside/store";

export type mapStateToPropsType = {
    dialogs: Array<DialogType>
    messageForNewDialog: string
    messages: Array<MessageType>
}

const mapStateToProps = (state: RouteStateType):mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messageForNewDialog: state.dialogsPage.messageForNewDialog,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch: ActionCreator<typeof dialogsReducer>) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;