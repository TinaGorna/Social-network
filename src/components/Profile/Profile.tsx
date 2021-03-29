import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, PostType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
    posts: PostType[]
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}
const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 messageForNewPost={props.messageForNewPost}
                 dispatch={store.dispatch.bind(store)}
        />
    </div>
}

export default Profile;

