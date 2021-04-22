import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {Textarea} from "../../common/Downloader/FormsControl/FormControl";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";
import {PostType} from "../../../outside/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
    like: (postID: string) => void
    unlike: (postID: string) => void
}

type AddPostPropsType = {
    newPostText: string
}

const MyPosts = React.memo((props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post
        key={p.id}
        id={p.id}
        message={p.message}
        time={p.time}
        liked={p.liked}
        likesCount={p.likesCount}
        like={props.like}
        unlike={props.unlike} />).reverse()

    // const newPostElement = React.createRef<HTMLTextAreaElement>();
    const onAddPost = (values: AddPostPropsType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={styles.postsWrapper}>

            <div className={styles.postsTitle}>
                Maje pasty
            </div>
            <AddNewPostReduxFrom onSubmit={onAddPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLengthCreator500 = maxLengthCreator(500)

const AddNewPostFrom: React.FC<InjectedFormProps<AddPostPropsType>> = (props) => {
    return (
        <form className={styles.addPost} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component={Textarea}
                    placeholder='Enter your message'
                    wrap='hard'
                    validate={[required, maxLengthCreator500]} />
            </div>
            <div className={styles.addPostBtn}>
                <button>Dadać post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxFrom = reduxForm<AddPostPropsType>({ form: 'profileAddNewPostFrom' })(AddNewPostFrom)

export default MyPosts;