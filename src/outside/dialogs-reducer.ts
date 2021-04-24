import { v1 } from 'uuid'
import { ActionsType } from "./redux-store"

export type MessageType = {
    id: string
    message: string
    time: string
}

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type DialogsPagePropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    newMessageBody: string
}


const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        { id: v1(), message: 'When is the next yoga class, Li?', time: '22:00' },
        { id: v1(), message: 'I came from India, oh it was amazing', time: '10:00' },
        { id: v1(), message: 'Can\'t wait to see you. Brought so many thing for you', time: '11:00' },
        { id: v1(), message: 'I can bring dinner tonight, what do you think?', time: '12:00' },
        { id: v1(), message: 'Reunite you lol', time: '13:00' }
    ],
    dialogs: [
        { id: v1(), name: 'Josephine', avatar: 'https://i.pinimg.com/564x/ec/5f/db/ec5fdb748c2a55e55ecb141929a66f70.jpg' },
        { id: v1(), name: 'Volodya', avatar: 'https://i.pinimg.com/564x/11/2f/b4/112fb4c77d01ad300593664cb13a4c55.jpg' },
        { id: v1(), name: 'Di', avatar: 'https://i.pinimg.com/564x/66/e1/b5/66e1b5ef286f9da7f02c89b215ced4f6.jpg' },
        { id: v1(), name: 'Andrew', avatar: 'https://i.pinimg.com/564x/a6/5b/13/a65b13ddf43905ed7847d0c44b98cf7c.jpg' },
        { id: v1(), name: 'Lech', avatar: 'https://i.pinimg.com/564x/36/83/aa/3683aab2d8dbf3120069089db9e21e96.jpg' },
        { id: v1(), name: 'Karol', avatar: 'https://i.pinimg.com/564x/d3/8d/27/d38d27c2e13ca66d1e448604f067a290.jpg' }
    ]
}

export const dialogsReducer = (state: DialogsPagePropsType = initialState, action: ActionsType): DialogsPagePropsType => {
    let copyState = { ...state };
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage: MessageType = {
                id: v1(),
                message: action.newMessageBody.trim(),
                time: `${new Date().getHours()}:${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`
            }
            if (newMessage.message !== '') {
                copyState = { ...state, messages: [...state.messages, newMessage] }
            }
            return copyState
        }
        default:
            return state
    }
}

export const SendMessageActionCreator = (newMessageBody: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer