import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType, StoreType} from "../../outside/store";
import MyPostsContainer from "./MyPosts/NewOne/MyPostsContainer";


type ProfilePropsType = {
    posts: PostType[]
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
    updateNewPostText: (newText: string) => void
    store: StoreType
}
const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}
        />
    </div>
}

export default Profile;

