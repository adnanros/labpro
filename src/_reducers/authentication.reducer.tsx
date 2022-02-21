import { AnyAction } from 'redux';
import { IUserAuthenticationState, userConstants } from '../_constants';

const initialState: IUserAuthenticationState =  {
  isLogingout: false,
  isLoadingAuthState: false,
  isLoggingIn: false,
  isSignedIn: false,
  isSignedInUserPackageAdmin: false,
  email: ''
};

//we reveive actions from useractions.login function. with each action, we also receive some data. for example, on login request we reveive no data,..
export function authentication(state = initialState, action: AnyAction) {
  switch (action.type) {

    case userConstants.AUTH_STATE_REQUEST:
      return {
        isLogingout: false,
        isLoadingAuthState: true,
        isLoggingIn: false,
        isSignedIn: false,
        isSignedInUserPackageAdmin: false,
        email: ''
      }
    case userConstants.AUTH_STATE_SUCCESS_LOGEDIN:
      return {
        isLogingout: false,
        isLoadingAuthState: false,
        isLoggingIn: false,
        isSignedIn: true,
        isSignedInUserPackageAdmin: action.isSignedInUserPackageAdmin,
        email: action.email//we receive username from success action.
      };
    case userConstants.AUTH_STATE_SUCCESS_LOGEDOUT:
      return {
        isLogingout: false,
        isLoadingAuthState: false,
        isLoggingIn: false,
        isSignedIn: false,
        isSignedInUserPackageAdmin: false,
        email: ''
      }
    case userConstants.AUTH_STATE_FAILURE:
        return {
          isLogingout: false,
          isLoadingAuthState: false,
          isLoggingIn: false,
          isSignedIn: false,
          isSignedInUserPackageAdmin: false,
          email: ''
        }
    case userConstants.LOGIN_REQUEST:
      //we need no data from action
      return {
        isLogingout: false,
        isLoadingAuthState: false,
        isLoggingIn: true,
        isSignedIn: false,
        isSignedInUserPackageAdmin: false,
        email: ''
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLogingout: false,
        isLoadingAuthState: false,
        isLoggingIn: false,
        isSignedIn: true,
        isSignedInUserPackageAdmin: action.isSignedInUserPackageAdmin,
        email: action.email//we receive username from success action.
      };
    case userConstants.LOGIN_FAILURE:
      return initialState;
    case userConstants.LOGIN_FAILURE_NON_CONFIRMED_USER:
        return {
          isLogingout: false,
          isLoadingAuthState: false,
          isLoggingIn: false,
          isSignedIn: false,
          isSignedInUserPackageAdmin: false,
          email: action.email//we receive username from LOGIN_FAILURE_NON_CONFIRMED_USER action. we set the email here, to be used by confirm_register page.
        }
    case userConstants.LOGOUT:
      return {
        isLogingout: true,
        isLoadingAuthState: false,
        isLoggingIn: false,
        isSignedIn: false,
        isSignedInUserPackageAdmin: false,
        email: ''
      };
    default:
      return state
  }
}