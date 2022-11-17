export interface ILogin {
    email: string,
    password: string
}

export interface IUser {
    id: number;
    username: string,
    password: string,
    salt: number[]
}

export interface IUserRegistration {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}


