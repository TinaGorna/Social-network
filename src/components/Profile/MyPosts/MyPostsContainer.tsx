import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import {ActionsType, AppStateType} from "../../../outside/redux-store";
import {AddPostActionCreator, likeAC, unlikeAC} from "../../../outside/profile-reducer";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(AddPostActionCreator(newPostText))
        },
        like: (postID: string) => {
            dispatch(likeAC(postID))
        },
        unlike: (postID: string) => {
            dispatch(unlikeAC(postID))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;