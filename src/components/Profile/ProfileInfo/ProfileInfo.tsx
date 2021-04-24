import React from 'react';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../outside/profile-reducer";
import Downloader from "../../Common/Preloader/Downloader";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    let contacts: Array<any> = []
    props.profile && Object.entries(props.profile.contacts).forEach(([key, value]) => contacts.push(<div key={key}>{value !== null && value !== '' ? `${key}: ${value}` : ``}</div>))

    if (!props.profile?.fullName) {
        return <Downloader />
    }
    return (
        <div>
            <div className={styles.profileInfoWrapper}>
                    <img className={styles.profilephoto} src='https://i.pinimg.com/564x/e8/42/55/e842551f1287148f65da67e35daf2a39.jpg' alt='user' />
                <div className={styles.profileInfoDescription}>
                    <div className={styles.profileInfoName}>Hello, Alina! What's new?</div>
                    <ProfileStatusWithHooks status={props.status}
                                            updateUserStatus={props.updateUserStatus} />
                    <div className={styles.myyogaclasses}>
                        <div className={styles.title}>Join my Yoga classes (Click)</div>
                        <div>{props.profile.lookingForAJobDescription}</div>
                    </div>
                    <div className={styles.title}>About me</div>
                    <div>{props.profile.aboutMe}</div>
                    <div className={styles.title}>My contacts</div>
                    <div className={styles.profileInfoContacts}>{contacts}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;