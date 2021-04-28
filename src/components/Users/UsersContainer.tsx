import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import {
    followThunkCreator,
    getUsersThunkCreator, setCurrentPage, setTotalUsersCount,
    toggleIsFollowingProgress,
    unfollowThunkCreator,
    UserType
} from "../../outside/users-reducer";
import Downloader from "../Common/Preloader/Downloader";
import {AppStateType} from "../../outside/redux-store";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../outside/users-selector";


type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        const {currentPage,pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Downloader /> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    console.log('mapStateToProps USERS')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:  getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        getUsers: getUsersThunkCreator,
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator,
        setCurrentPage, setTotalUsersCount, toggleIsFollowingProgress
    })
)(UsersContainer)