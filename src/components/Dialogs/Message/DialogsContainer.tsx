import React from "react";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "../../../outside/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";
import {ActionCreator} from "redux";
import {StoreType} from "../../../outside/redux-store";

export type mapStateToPropsType = {
    dialogsPage: StoreType
    messageForNewDialog: string
}

const mapStateToProps = (state: mapStateToPropsType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: ActionCreator<typeof dialogsReducer>, state: mapStateToPropsType) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC(state.messageForNewDialog))
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;