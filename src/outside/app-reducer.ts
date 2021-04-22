import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { getAuthUserDataThunkCreator } from "./auth-reducer"
import { ActionsType, AppStateType } from "./redux-store"

export type AppPropsType = {
    initialized: boolean
}

export type InitializedSuccessActionType = {
    type: 'SET-INITIALIZED-SUCCESS'
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

const SET_INITIALIZED_SUCCESS = 'SET-INITIALIZED-SUCCESS'

let initialState = {
    initialized: false
}

export const appReducer = (state: AppPropsType = initialState, action: ActionsType): AppPropsType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return { ...state, initialized: true }
        }
        default:
            return state
    }
}

export const initializedSuccess = (): InitializedSuccessActionType => {
    return {
        type: SET_INITIALIZED_SUCCESS
    }
}

export const initializeThunkCreator = (): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
        let promise = dispatch(getAuthUserDataThunkCreator())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default appReducer