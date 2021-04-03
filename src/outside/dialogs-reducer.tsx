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

let initialState = {
    messageForNewDialog: "",
    messages: [
        {id: 1, message: "Hi, lady"},
        {id: 2, message: "How is your React studying?"},
        {id: 3, message: "Btw, I'm going to France soon. Getting ready for the departure"},
        {id: 4, message: "Chiao"}
    ],
    dialogs: [
        {id: 1, name: "Valery"},
        {id: 2, name: "Johny"},
        {id: 3, name: "Mommy"},
        {id: 4, name: "Josephine"}
    ],
};
const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
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