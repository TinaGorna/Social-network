import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './NewOne/Post';
import {PostType} from "../../../redux/state";

export type PostsPropsType = {
    posts: PostType[],
    addPost: () => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string

}

// как зафиксить message

const MyPosts: React.FC<PostsPropsType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>); //добавить сюда key = {p.id}??


    const addPost = () => {
        props.addPost();
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