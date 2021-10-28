
export interface IUser {
    username: string;
    email: string;
    //...
}

export interface UserState {
    authenticated: false,
    credentials: IUser,
    loading: false
}

export interface UIState {
    loading: false,
    errors: any
}

//user reducer types
export const SET_AUTHENTICATED='SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED='SET_UNAUTHENTICATED';
export const SET_USER='SET_USER';
export const LOADING_USER='LOADING_USER';
//UI reducer types
export const SET_ERRORS='SET_ERRORS';
export const LOADING_UI='LOADING_UI';
export const CLEAR_ERRORS='CLEAR_ERRORS';