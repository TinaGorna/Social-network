import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType, savePhoto,
    updateStatusThunkCreator
} from "../../outside/profile-reducer";
import {AppStateType} from "../../outside/redux-store";

export type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    refreshProfile() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        /*if (this.props.match.params.userId !== this.prevProps.match.params.userId)*/
        this.refreshProfile()
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getUserStatus: getStatusThunkCreator,
        updateUserStatus: updateStatusThunkCreator/*, savePhoto*/
    }),
    withRouter
)(ProfileContainer);