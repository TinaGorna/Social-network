import React from "react";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../outside/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";
import {ActionCreator} from "redux";
import {RouteStateType} from "../../../../outside/redux-store";
import {PostType} from "../../../../outside/store";

export type mapStateToPropsType = {
    posts: PostType[]
    messageForNewPost: string

}

const mapStateToProps = (state: RouteStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: ActionCreator<typeof profileReducer>) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default PostsContainer;