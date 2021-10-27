import { userConstants } from '../_constants';
import { alertActions } from './';
import { history, isPackageAdmin } from '../_helpers';
import {Auth} from 'aws-amplify';

export const userActions = {
    login,
    logout,
    register
};

function login(username: string, password: string) {

    return (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request({ username }));

        Auth.signIn(username, password).then(
            user => {
                if(isPackageAdmin()){
                    dispatch(successPackageAdmin(user));
                }else {
                    dispatch(success(user));
                }
                history.push('/');
            },
            error => {
                if(error.name === 'UserNotConfirmedException') {
                    dispatch(failureNonConfirmedUser(error.toString()));
                }else {
                    dispatch(failure(error.toString()));
                }
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user: any) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user: any) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function successPackageAdmin(user: any) { return { type: userConstants.LOGIN_SUCCESS_Admin, user } }
    function failure(error: string) { return { type: userConstants.LOGIN_FAILURE, error } }
    function failureNonConfirmedUser(error: string) { return { type: userConstants.LOGIN_FAILURE_NON_CONFIRMED_USER, error } }
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
        dispatch(request(username));
        Auth.signUp({
            username,
            password,
        }).then(
            user => { 
                    dispatch(success(user));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
            error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: any) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user: any) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.REGISTER_FAILURE, error } }
}
