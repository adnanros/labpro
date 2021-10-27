export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_SUCCESS_Admin: 'USERS_LOGIN_SUCCESS_ADMIN',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    LOGIN_FAILURE_NON_CONFIRMED_USER: 'USERS_LOGIN_FAILURE_NON_CONFIRMED',
    
    LOGOUT: 'USERS_LOGOUT',
    LOGOUT_FAILURE: 'USERS_LOGOUT_FAILURE',
};

export interface IUserAuthenticationState {
    isLoggingIn: boolean,
    isSignedIn: boolean,
    isSignedInUserPackageAdmin: boolean,
    userName: string,
    email: string
}

export interface IUserRegisterationState {
    isRegistering: boolean
}