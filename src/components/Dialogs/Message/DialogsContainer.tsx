import React from "react";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "../../../outside/dialogs-reducer";
import Dialogs from "../Dialogs";
import {connect} from "react-redux";
import {ActionCreator} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: ActionCreator<typeof dialogsReducer>) => {
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