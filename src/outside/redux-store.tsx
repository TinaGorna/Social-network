import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes} from "./store";

export type StoreType = {
    subscribe: (observer: () => void) => void
    getState: () => RouteStateType
    dispatch: (action: ActionsTypes) => void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export type RouteStateType = ReturnType<typeof reducers>

export let store = createStore(reducers);

window.store = store; //todo почему ошибка?

export default store;