import {v1} from "uuid"
import {profileAPI} from "../api/api"
import {ActionsType} from "./redux-store"

export type PostType = {
    id: string
    message: string
    time: string
    liked: boolean
    likesCount: number
}

export type ContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}

export type ProfilePagePropsType = {
    profile: ProfileType | null
    status: string
    posts: Array<PostType>
}

export type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}

export type LikePostActionType = {
    type: "LIKE-POST"
    postID: string
}

export type UnlikePostActionType = {
    type: "UNLIKE-POST"
    postID: string
}

export type SetUserProfileActionType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}

export type SetStatusActionType = {
    type: "SET-STATUS"
    status: string
}

export type DeletePostActionType = {
    type: "DELETE-POST"
    postID: string
}

const ADD_POST = "ADD-POST"
const LIKE = "LIKE-POST"
const UNLIKE = "UNLIKE-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const DELETE_POST = "DELETE-POST"

export let initialState = {
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: NaN,
        photos: {
            small: "",
            large: ""
        }
    },
    status: "",
    posts: [
        {
            id: v1(),
            message: "Want to decorate the interior in purple shades? Not sure where to start?" +
                "Where to get the cheapest wallpaper? How to save on furniture?",
            time: "22:00",
            liked: true,
            likesCount: 12
        },
        {
            id: v1(),
            message: "Want to decorate the interior in purple shades? Not sure where to start?" +
                "Where to get the cheapest wallpaper? How to save on furniture?",
            time: "23:00",
            liked: false,
            likesCount: 11
        }
    ]
}

const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsType): ProfilePagePropsType => {
    let copyState = {...state}
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: v1(),
                message: action.newPostText.trim(),
                time: `${new Date().getHours()}:${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`,
                liked: false,
                likesCount: 0
            }
            if (newPost.message !== "") {
                copyState = {...state, posts: [...state.posts, newPost]}
            }
            return copyState
        }
        case LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postID) {
                        return {...p, liked: true, likesCount: p.likesCount + 1}
                    }
                    return p
                })
            }
        case UNLIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postID) {
                        return {...p, liked: false, likesCount: p.likesCount - 1}
                    }
                    return p
                })
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postID)
            }
        default:
            return state
    }
}

export const AddPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const likeAC = (postID: string): LikePostActionType => {
    return {
        type: LIKE,
        postID: postID
    }
}

export const unlikeAC = (postID: string): UnlikePostActionType => {
    return {
        type: UNLIKE,
        postID: postID
    }
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status: string): SetStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
}

export const deletePost = (postID: string): DeletePostActionType => {
    return {
        type: DELETE_POST,
        postID
    }
}

export const getUserProfileThunkCreator = (userId: number) => async (dispatch: (action: ActionsType) => void) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}

export const getStatusThunkCreator = (userId: number) => async (dispatch: (action: ActionsType) => void) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: (action: ActionsType) => void) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.resultCode) {
        dispatch(setStatus(status))
    }
}

export default profileReducer