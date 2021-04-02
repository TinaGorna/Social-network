import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, PostType} from "../../outside/store";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    posts: PostType[]
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
    updateNewPostText: (newText: string) => void
}
const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 messageForNewPost={props.messageForNewPost}
                 dispatch={store.dispatch.bind(store)}
                 updateNewPostText={props.updateNewPostText}

         />
    </div>
}

export default Profile;

