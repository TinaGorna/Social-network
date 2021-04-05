import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../outside/profile-reducer";
import MyPosts from "../MyPosts";
import {StoreType} from "../../../../outside/redux-store";


export type PostsPropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<PostsPropsType> = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.messageForNewPost))
    }
    const newPostChangeHandler = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (<MyPosts updateNewPostText={newPostChangeHandler}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     messageForNewPost={state.profilePage.messageForNewPost}

    />)
}
export default MyPostsContainer;