import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div >
            <img className={s.backphoto} src="https://c.pxhere.com/images/89/1a/4898ca5cd276d6fafc07f7abd76a-1444769.jpg!d" alt="logo"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;

