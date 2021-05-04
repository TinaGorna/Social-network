import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';

import profileReducer, {
    AddPostActionType,
    DeletePostActionType,
    LikePostActionType,
    SavePhotoActionType,
    SetStatusActionType,
    SetUserProfileActionType,
    UnlikePostActionType
} from "./profile-reducer"
import dialogsReducer, { SendMessageActionType } from './dialogs-reducer'
import usersReducer, {
    FollowActionType, SetUsersActionType, SetCurrentPageActionType,
    UnfollowActionType, SetTotalUsersActionType, ToggleIsFetchingActionType,
    ToggleIsFollowingProgressActionType,
    FakeActionType,
} from './users-reducer'
import authReducer, {SetUserDataActionType} from "./auth-reducer";
import appReducer, { InitializedSuccessActionType } from './app-reducer';

type ReducersType = typeof reducers

export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
   /* captcha: getCaptchaUrlSuccess*/
})

let store  = createStore(reducers, applyMiddleware(thunkMiddleware))



export type ActionsType =
    AddPostActionType
    | SendMessageActionType
    | LikePostActionType
    | UnlikePostActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersActionType
    | ToggleIsFetchingActionType
    | SetUserDataActionType
    | ToggleIsFollowingProgressActionType
    | InitializedSuccessActionType
    | FakeActionType
    | DeletePostActionType
    | SavePhotoActionType

// @ts-ignore
window.store = store

export default store