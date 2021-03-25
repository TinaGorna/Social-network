import React from "react";

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://i.pinimg.com/originals/1f/1b/9b/1f1b9b06e4d9155aa2a359cf8ae2104f.png" alt="logo"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;

