import React from "react"
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "Hello",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg",
                followed: true,
                fullName: "Tanya",
                status: "Morning",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg",
                followed: false,
                fullName: "Janna",
                status: "Yes",
                location: {city: "Kiev", country: "Ukraine"}
            }
        ])
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                <span>
<div>{u.fullName}</div>
<div>{u.status}</div>
                </span>
                    <span>
                        <div>{u.location.country}</div>
<div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;