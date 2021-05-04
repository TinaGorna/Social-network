import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from "../../outside/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;