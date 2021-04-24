import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ba96ec03-2e8b-4f73-baef-40d56b705b47"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance
            .post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance
            .get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number) {
        return instance
            .get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, { status: status })
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth() {
        return instance
            .get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance
            .post(`auth/login`, { email, password, rememberMe })
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance
            .delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}
