import {ActionsTypes, DialogPageType, MessageType} from "./store";

export const addMessageAC = (messageForNewDialog: string) => {
    return {
        type: 'ADD-MESSAGE',
        messageForNewDialog: messageForNewDialog
    } as const
}
export const updateNewMessageTextAC = (messageForNewDialog: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        messageText: messageForNewDialog
    } as const
}

const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageForNewDialog,
            };
            state.messages.push(newMessage);
            state.messageForNewDialog = "";
            break;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.messageForNewDialog = action.messageText;
            break;
    }
    return state;
}
export default dialogsReducer;