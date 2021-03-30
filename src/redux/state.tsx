export type StoreType = {
    _state: RouteStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RouteStateType
    dispatch: (action: ActionsTypes) => void
    updateNewMessageText: (messageText: string) => void
    updateNewPostText: (postText: string) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>
    

export const addPostActionCreator = (messageForNewPost: string) => {
    return {
        type: "ADD-POST",
        messageForNewPost: messageForNewPost
    } as const
}
export const updateNewPostTextActionCreator = (messageForNewPost: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        postText: messageForNewPost
    } as const
}
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
    dispatch(action) {
        /*switch (action.type) {
            case 'ADD-POST': this._addPost(); break;
            case 'UPDATE-NEW-POST-TEXT': this._updateNewPostText(action.newPostText); break;
        }*/
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message:action.messageForNewPost,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = "";
            this._onChange();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.messageForNewPost = action.postText;
            this._onChange();
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.messageForNewDialog,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.messageForNewDialog = "";
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.messageForNewDialog = action.messageText;
            this._onChange();
        }
    }
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
type BestFriendsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>,
    messageForNewPost: string
}
export type DialogPage = {
    messageForNewDialog: string;
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {
    bestFriends: Array<BestFriendsType>
}
export type RouteStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPage
    sidebar: SidebarType
}


export default store;

