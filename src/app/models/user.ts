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

export interface IUpdateProfile {
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    email: string,
    phoneNumber: string
}

export interface IProfile {
    id: number,
    phoneNumber: string,
    gender: string,
    dob: string,
    user: {
        firstName: string,
        lastName: string,
        email: string,
        id: number,
        encryptedPassword: string,
        salt: string
    }
}

export interface IChangePassword {
    oldPassword: string,
    newPassword: string
}