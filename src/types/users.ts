export type Role = "admin" | "customer"

export interface User{
    id: number,
    email: string,
    username: string,
    password: string,
    role: Role,
    name: {
        firstname: string,
        lastname: string,
    },
    phone: number
}

export interface UserReducer {
    users: User[],
    currentUser: User | undefined
}

