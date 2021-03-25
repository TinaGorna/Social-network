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
let state: RouteStateType = {
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
}

let renderEntireTree = () => {
    console.log("state has been changed");
}
export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.messageForNewPost,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.messageForNewPost = "";
    renderEntireTree();
}

export const updateNewPostText = (postText: string) => {
    state.profilePage.messageForNewPost = postText;
    renderEntireTree();
}
export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    renderEntireTree();
}
export const addMessage = () => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.dialogsPage.messageForNewDialog,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.messageForNewDialog = "";
    renderEntireTree();
};
export const updateNewMessageText = (messageText: string) =>{
    state.dialogsPage.messageForNewDialog = messageText;
    renderEntireTree();
}
export const changeNewMessage = (newMessage: string) => {
    state.dialogsPage.messageForNewDialog = newMessage;
    renderEntireTree();
}

export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}
export default state;
