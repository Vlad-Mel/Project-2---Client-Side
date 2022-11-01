export interface ILogin {
    username: string,
    password: string
}

export interface IUser {
    id: number;
    username: string,
    password: string,
    salt: number[]
}

