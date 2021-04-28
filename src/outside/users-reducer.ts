import {usersAPI} from "../api/api"
import {ActionsType} from "./redux-store"

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

export type UsersPagePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type FollowActionType = {
    type: "FOLLOW"
    userID: number
}

export type UnfollowActionType = {
    type: "UNFOLLOW"
    userID: number
}

export type SetUsersActionType = {
    type: "SET-USERS"
    users: Array<UserType>
}

export type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type SetTotalUsersActionType = {
    type: "SET-TOTAL-USERS-COUNT"
    totalUsersCount: number
}

export type ToggleIsFetchingActionType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

export type ToggleIsFollowingProgressActionType = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS"
    isFetching: boolean
    userId: number
}

export type FakeActionType = {
    type: "FAKE"
    fake: number
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}

export const usersReducer = (state: UsersPagePropsType = initialState, action: ActionsType): UsersPagePropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.userID) {
                        return {...f, followed: false}
                    }
                    return f
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userID: number): FollowActionType => {
    return {
        type: FOLLOW,
        userID
    }
}

export const unfollowSuccess = (userID: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressActionType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: (action: ActionsType) => void) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}
const followUnfollowFlow = async (dispatch: (action: ActionsType) => void, userId: number, apiMethod: (userId: number) => Promise<any>, actionCreator: (userID: number) => FollowActionType | UnfollowActionType) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const followThunkCreator = (userId: number) => async (dispatch: (action: ActionsType) => void) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollowThunkCreator = (userId: number) => async (dispatch: (action: ActionsType) => void) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default usersReducer