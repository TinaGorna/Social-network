import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './NewOne/Post';
import {ActionsTypes, PostType} from "../../../outside/store";
import {addPostActionCreator} from "../../../outside/profile-reducer";

export type PostsPropsType = {
    posts: PostType[],
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
    updateNewPostText: (newText: string) => void
}
const MyPosts: React.FC<PostsPropsType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.messageForNewPost))
    }
    const newPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea value={props.messageForNewPost} onChange={newPostChangeHandler}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.post}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts;