import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../outside/profile-reducer";
import Downloader from "../../Common/Preloader/Downloader";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    let contacts: Array<any> = []
    props.profile && Object.entries(props.profile.contacts).forEach(([key, value]) => contacts.push(<div
        key={key}>{value !== null && value !== "" ? `${key}: ${value}` : ``}</div>))

    if (!props.profile?.fullName) {
        return <Downloader/>
    }

    return (
            <div className={styles.profileInfoWrapper}>
                <img className={styles.profilephoto}
                     src="https://i.pinimg.com/564x/e8/42/55/e842551f1287148f65da67e35daf2a39.jpg" alt="user"/>
                <div className={styles.profileInfoDescription}>
                    <div
                        className={styles.profileInfoName}>Hello, Alina! What's new?
                    </div>
                    <ProfileStatusWithHooks status={props.status}
                                            updateUserStatus={props.updateUserStatus}/>
                    <div className={styles.myyogaclasses}>
                        {/*реклама JogaClasses верстка из HTML Acad добавить*/}
                        <div className={styles.title}>
                            Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
                        </div>
                        <div>
                            {props.profile.lookingForAJobDescription}
                        </div>
                    </div>
                    <div className={styles.title}>About me {props.profile.aboutMe}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div className={styles.title}>My contacts{/*: {Object.keys(props.profile.contacts)}*/}</div>
                    <div className={styles.profileInfoContacts}>{contacts}</div>
                </div>
                </div>
    )
}

export default ProfileInfo;