export type StoreType = {
    _state: RouteStateType
    changeNewText: (newText: string) => void
    addPost: () => void
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RouteStateType
    updateNewPostText: (postText: string) => void
    addMessage: () => void
    updateNewMessageText: (messageText: string) => void
    changeNewMessage: (newMessage: string) => void
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
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = "";
        this._onChange();
    },
    updateNewPostText(postText: string) {
        this._state.profilePage.messageForNewPost = postText;
        this._onChange();
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._onChange();
    },
    addMessage() {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.messageForNewDialog,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.messageForNewDialog = "";
        this._onChange();
    },
    updateNewMessageText (messageText: string) {
        this._state.dialogsPage.messageForNewDialog = messageText;
        this._onChange();
    },
    changeNewMessage(newMessage: string) {
        this._state.dialogsPage.messageForNewDialog = newMessage;
        this._onChange();
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

