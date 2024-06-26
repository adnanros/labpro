export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    CONFIRM_REGISTER_REQUEST: 'USERS_CONFIRM_REGISTER_REQUEST',
    CONFIRM_REGISTER_SUCCESS: 'USERS_CONFIRM_REGISTER_SUCCESS',
    CONFIRM_REGISTER_FAILURE: 'USERS_CONFIRM_REGISTER_FAILURE',

    RESEND_REGISTER_CODE_REQUEST: 'RESEND_REGISTER_CODE_REQUEST',
    RESEND_REGISTER_CODE_SUCCESS: 'RESEND_REGISTER_CODE_SUCCESS',
    RESEND_REGISTER_CODE_FAILURE: 'RESEND_REGISTER_CODE_FAILURE',

    SEND_ForgotPassword_CODE_REQUEST: 'SEND_ForgotPassword_CODE_REQUEST',
    SEND_ForgotPassword_CODE_SUCCESS: 'SEND_ForgotPassword_CODE_SUCCESS',
    SEND_ForgotPassword_CODE_FAILURE: 'SEND_ForgotPassword_CODE_FAILURE',
    Reset_Password_REQUEST: 'Reset_Password_REQUEST',
    Reset_Password_SUCCESS: 'Reset_Password_SUCCESS',
    Reset_Password_FAILURE: 'Reset_Password_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    LOGIN_FAILURE_NON_CONFIRMED_USER: 'USERS_LOGIN_FAILURE_NON_CONFIRMED',
    
    AUTH_STATE_REQUEST: 'AUTH_STATE_REQUEST',
    AUTH_STATE_SUCCESS_LOGEDIN: 'AUTH_STATE_SUCCESS_LOGEDIN',
    AUTH_STATE_SUCCESS_LOGEDOUT: 'AUTH_STATE_SUCCESS_LOGEDOUT',
    AUTH_STATE_FAILURE: 'AUTH_STATE_FAILURE',

    LOGOUT: 'USERS_LOGOUT',
    LOGOUT_FAILURE: 'USERS_LOGOUT_FAILURE',
};

export interface IUserAuthenticationState {
    isLogingout: boolean,
    isLoadingAuthState: boolean,
    isLoggingIn: boolean,
    isSignedIn: boolean,
    isSignedInUserPackageAdmin: boolean,
    email: string
}

export interface IUserRegisterationState {
    isRegistering: boolean,
    email: string
}

export interface IUserConfirmRegisterationState {
    isConfirming: boolean
}

export interface IUserSendForgotPassordState {
    isSending: boolean
}