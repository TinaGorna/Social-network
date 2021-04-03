import {ActionsTypes, PostType, ProfilePageType} from "./store";

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

let initialState = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: "What's up, man?", likesCount: 12},
        {id: 2, message: "This is ma first post here", likesCount: 6},
    ]
};
const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.messageForNewPost,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.messageForNewPost = "";
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPost = action.postText;
            break;
    }
    return state;
}
export default profileReducer;