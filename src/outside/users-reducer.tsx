import {ActionsTypes} from "./store";

type UsersLocation = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: UsersLocation
    photos: PhotosType
}
const initialState: InitialStateType = {
    users: []
};
export type InitialStateType = {
    users: UserType[]
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};
export const followedAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unfollowedAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

export default usersReducer;