import { userConstants } from '../_constants';
import { alertActions } from './';
import { history, isPackageAdmin } from '../_helpers';
import {Auth} from 'aws-amplify';

export const userActions = {
    login,
    logout,
    register,
    confirmRegister,
    resendConfirmationCode,
    fetchAthStatus
};

function fetchAthStatus() {
    return (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) =>  {
        dispatch(request());
        Auth.currentSession().then(
            session => {
                let idToken = session.getIdToken();
                if(isPackageAdmin()){
                    dispatch(success(idToken.payload.email,true));
                }else {
                    dispatch(success(idToken.payload.email,false));
                }
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    };

    function request() { return { type: userConstants.AUTH_STATE_REQUEST } }
    function success(email: string,isSignedInUserPackageAdmin: boolean) { return { type: userConstants.AUTH_STATE_SUCCESS_LOGEDIN, email,isSignedInUserPackageAdmin } }
    function failure(error: string) { return { type: userConstants.AUTH_STATE_SUCCESS_LOGEDOUT, error } }
}

function login(username: string, password: string) {

    return (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());

        Auth.signIn(username, password).then(
            user => {
                if(isPackageAdmin()){
                    dispatch(success(username,true));
                }else {
                    dispatch(success(username,false));
                }
                history.push('/');
            },
            error => {
                if(error.name === 'UserNotConfirmedException') {
                    dispatch(failureNonConfirmedUser(username ,error.toString()));
                    history.push('/confirmRegister');
                }else {
                    dispatch(failure(error.toString()));
                }
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request() { return { type: userConstants.LOGIN_REQUEST } }
    function success(email: string,isSignedInUserPackageAdmin: boolean) { return { type: userConstants.LOGIN_SUCCESS, email,isSignedInUserPackageAdmin } }
    function failure(error: string) { return { type: userConstants.LOGIN_FAILURE, error } }
    //we send email to be used by confirm register page.
    function failureNonConfirmedUser(email:string, error: string) { return { type: userConstants.LOGIN_FAILURE_NON_CONFIRMED_USER, email, error } }
}

function logout() {
    return (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        Auth.signOut().then(
            user => { 
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function success(user: any) { return { type: userConstants.LOGOUT } }
    function failure(error: string) { return { type: userConstants.LOGOUT_FAILURE, error } }
}

function register(username: string, password: string) {
    return (dispatch: (arg0: { type: string; user?: any; message?: string; error?: any; }) => void) => {
        dispatch(request());
        Auth.signUp({
            username,
            password,
        }).then(
            user => { 
                    dispatch(success(username));
                    history.push('/ConfirmRegister');
                    dispatch(alertActions.success('Registration successful'));
                },
            error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.REGISTER_REQUEST } }
    function success(email: string) { return { type: userConstants.REGISTER_SUCCESS, email } }
    function failure(error: any) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function confirmRegister(username: string, code: string) {
    return (dispatch: (arg0: { type: string; user?: any; message?: string; error?: any; }) => void) => {
        dispatch(request());
        Auth.confirmSignUp(
            username,
            code,
        ).then(
            user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration confirmed successfully'));
                },
            error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.CONFIRM_REGISTER_REQUEST } }
    function success() { return { type: userConstants.CONFIRM_REGISTER_SUCCESS } }
    function failure(error: any) { return { type: userConstants.CONFIRM_REGISTER_FAILURE, error } }
}

function resendConfirmationCode(username: string) {
    
    return (dispatch: (arg0: { type: string; message?: string; error?: any; }) => void) => {
        dispatch(request());
        Auth.resendSignUp(username).then(
            user => { 
                    dispatch(success());
                    dispatch(alertActions.success('Code sent successfully. please check your email at: ' + username));
                },
            error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: userConstants.RESEND_REGISTER_CODE_REQUEST } }
    function success() { return { type: userConstants.RESEND_REGISTER_CODE_SUCCESS } }
    function failure(error: any) { return { type: userConstants.RESEND_REGISTER_CODE_FAILURE, error } }
}