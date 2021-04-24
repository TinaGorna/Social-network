import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {PostType} from "../../../outside/profile-reducer";
import {maxLengthCreator, required} from "../../../utils/validators/validatos";
import {Textarea} from "../../Common/FormsControls/FormControl";

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
        unlike={props.unlike}/>).reverse()

    const onAddPost = (values: AddPostPropsType) => {
        props.addPost(values.newPostText)
        values.newPostText = " "
    }

    return (
        <div className={styles.postsWrapper}>
            <div className={styles.postsTitle}>
                What's new?
            </div>
            <AddNewPostReduxFrom onSubmit={onAddPost}/>
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
                    name="newPostText"
                    component={Textarea}
                    placeholder="Add a note..."
                    wrap="hard"
                    validate={[required, maxLengthCreator500]}/>
            </div>
            <div className={styles.addPostBtn}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxFrom = reduxForm<AddPostPropsType>({form: "profileAddNewPostFrom"})(AddNewPostFrom)

export default MyPosts;