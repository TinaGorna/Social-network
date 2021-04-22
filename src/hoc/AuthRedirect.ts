import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {AppStateType} from "../outside/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {
    fake: () => void
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    const RedirectComponent: React.FC<MapStateToPropsType & DispatchPropsType> = (props) => {
        let { isAuth, fake, ...restProps } = props
        if (!isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as T} />
    }
    let ConnectedAuthRedirectComponent = connect<MapStateToPropsType, DispatchPropsType, T, AppStateType>(mapStateToPropsForRedirect, {fake: () => {}})(RedirectComponent)
    return ConnectedAuthRedirectComponent
}