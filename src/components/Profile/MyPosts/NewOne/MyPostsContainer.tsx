import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../outside/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";

export type PostsPropsType = {}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator(state.profilePage.messageForNewPost))  //что - то должно быть в скобках?
        },
        messageForNewPost: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default PostsContainer;