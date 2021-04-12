import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/NewOne/MyPostsContainer";


type ProfilePropsType = {}
const Profile: React.FC<ProfilePropsType> = () => {
    return <div>
        <ProfileInfo/>
        <PostsContainer/>
    </div>
}

export default Profile;

