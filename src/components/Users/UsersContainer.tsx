import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followedAC, InitialStateType, setUsersAC, unfollowedAC, UserType} from "../../outside/users-reducer";
import {RouteStateType} from "../../outside/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}
type mapDispatchToPropsType = {
    follow: (userid: number) => void
    unfollow: (userid: number) => void
    setUsers: (users: UserType[]) => void
}
let mapStateToProps = (state: RouteStateType): MapStatePropsType => {
    return{
        usersPage: state.users
    }
}
export type UsersPropsType = MapStatePropsType & mapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followedAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowedAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Users);