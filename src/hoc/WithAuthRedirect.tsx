import React, {ComponentType} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from "../outside/redux-store";

type MapStateToPropsType = {
        isAuth: boolean
}

type DispatchPropsType = {
    fake: () => void
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<P>(Component: React.ComponentType<P>) {
    const RedirectComponent: React.FC<MapStateToPropsType & DispatchPropsType> = (props) => {
        let { isAuth, fake, ...restProps } = props
        if (!isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as P} />
    }
    let ConnectedAuthRedirectComponent = connect<MapStateToPropsType, DispatchPropsType, P, AppStateType>(mapStateToPropsForRedirect, {fake: () => {}})(RedirectComponent)
    return ConnectedAuthRedirectComponent
}