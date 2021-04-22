import {ActionsTypes} from "./store";
import { FormAction, stopSubmit } from "redux-form"
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RouteStateType} from "./redux-store";

export type AuthPropsType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export type SetUserDataActionType = {
    type: 'SET-USER-DATA'
    payload: AuthPropsType
}

type ThunkType = ThunkAction<void, RouteStateType, unknown, ActionsTypes>

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: { userId, login, email, isAuth }
    }
}

export const getAuthUserDataThunkCreator = (): ThunkType => {
    return (dispatch: ThunkDispatch<RouteStateType, unknown, ActionsTypes>) => {
        return authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<RouteStateType, unknown, ActionsTypes | FormAction>) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', { _error: message }))
                }
            })
    }
}

export const logoutThunkCreator = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

export default authReducer