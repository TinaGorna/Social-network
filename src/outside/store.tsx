import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {followedAC, setUsersAC, unfollowedAC} from "./users-reducer";

export type StoreType = {
    _state: RouteStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RouteStateType
    dispatch: (action: ActionsTypes) => void
    updateNewMessageText: (messageText: string) => void
    updateNewPostText: (postText: string) => void
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type BestFriendsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>,
    messageForNewPost: string
}
export type DialogPageType = {
    messageForNewDialog: string;
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {
    bestFriends: Array<BestFriendsType>
}
export type RouteStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC> |
    ReturnType<typeof followedAC> |
    ReturnType<typeof unfollowedAC> |
    ReturnType<typeof setUsersAC>


const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: "What's up, man?", likesCount: 12},
                {id: 2, message: "This is ma first post here", likesCount: 6},
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {
            bestFriends: [
                {id: 1, message: "Andrew"},
                {id: 2, message: "Mom"},
                {id: 3, message: "Tanya"},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _onChange() {
        console.log("state has been changed");
    },
    subscribe(observer) {
        this._onChange = observer;
    },
    updateNewPostText(postText: string) {
        this._state.profilePage.messageForNewPost = postText;
        this._onChange();
    },
    updateNewMessageText (messageText: string) {
        this._state.dialogsPage.messageForNewDialog = messageText;
        this._onChange();
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange();
    }
}

export default store;

