import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";


type ProfilePropsType = {
    addPost: () => void
    posts: PostType[]
    updateNewPostText: (newText: string) => void
    messageForNewPost: string
}
const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}
                 messageForNewPost={props.messageForNewPost}
        />
    </div>
}

export default Profile;

