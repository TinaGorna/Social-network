import {FormAction, stopSubmit} from "redux-form"
import {ThunkAction, ThunkDispatch} from "redux-thunk"
import {authAPI} from "../api/api"
import {ActionsType, AppStateType} from "./redux-store"

export type AuthPropsType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

export type SetUserDataActionType = {
    type: "SET-USER-DATA"
    payload: AuthPropsType
}
export type GetCaptchaUrlSuccessActionType = {
    type: "GET_CAPTCHA_URL_SUCCESS"
    url: string
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

const SET_USER_DATA = "SET-USER-DATA"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null,
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionsType): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: {userId, login, email, isAuth}
    }
}
export const getCaptchaUrlSuccess = (url: string): GetCaptchaUrlSuccessActionType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        url
    }
}

export const getAuthUserDataThunkCreator = (): ThunkType => async (dispatch) => {
    let response = await authAPI.getAuth();
    if (response.resultCode === 0) {
        const {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType | FormAction>) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
     /*else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())*/
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutThunkCreator = (): ThunkType => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
/*export const getCaptchaUrl = () => async (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    let response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}*/


export default authReducer