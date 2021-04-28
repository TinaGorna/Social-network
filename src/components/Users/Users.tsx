import React from "react";


import userPhoto from "../../assets/images/user-icon.png"
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {UserType} from "../../outside/users-reducer";
import Pagination from "../Common/Pagination/Pagination";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //   pages.push(i)
    // }

    return <div>
        {
            props.users.map(u => <div key={u.id} className={styles.userItem}>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img className={styles.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                             alt="friend"/>
                    </NavLink>
                </div>
                <div className={styles.userItemProfileInfo}>
                    <div className={styles.userItemName}>{u.name}</div>
                    <div className={styles.userItemLocation}>{"props.location"}</div>
                    <div className={styles.userItemStatus}>{"props.status"}</div>
                </div>
                <div className={styles.followBtn}>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }
                            } style={{
                                backgroundColor: "gray",
                                fontFamily: "Monserrat",
                                fontSize: "20px",
                                cursor: "pointer",
                                boxShadow: "inset 0 20px 20px #ffffff",
                                borderRadius: "8px"
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }
                            } style={{
                                backgroundColor: "#f6f6f6",
                                fontFamily: "Monserrat",
                                fontSize: "20px",
                                boxShadow: "inset 0 20px 20px #ffffff",
                                borderRadius: "8px",
                                touchAction: "0 -20px 20px #ffffff",
                                zoom: "1",
                                cursor: "pointer"
                            }
                            }>Follow</button>
                    }
                </div>
            </div>)
        }
        <div>
            {/* {
            pages.map(p => {
              return <span
                className={this.props.currentPage === p ? styles.selectedPage : styles.page}
                onClick={(e) => { this.onPageChanged(p) }} >{p}</span>
            })
          } */}
            <Pagination totalCount={pagesCount} onPageChanged={props.onPageChanged}/>
        </div>
    </div>
}

export default Users