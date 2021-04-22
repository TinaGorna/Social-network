import { connect } from 'react-redux';

import { AppStateType, ActionsType  } from '../../../redux/redux-store';
import { AddPostActionCreator, likeAC, unlikeAC } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';

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