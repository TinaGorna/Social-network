import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../outside/profile-reducer";
import MyPosts from "../MyPosts";
import StoreContext from "../../../../StoreContext";


export type PostsPropsType = {
   /* store: StoreType*/

}

const MyPostsContainer: React.FC<PostsPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.messageForNewPost))
                }
                const newPostChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return <MyPosts updateNewPostText={newPostChangeHandler}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                messageForNewPost={state.profilePage.messageForNewPost}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;