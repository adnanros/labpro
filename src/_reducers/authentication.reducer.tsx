import { AnyAction } from 'redux';
import { IUserAuthenticationState, userConstants } from '../_constants';

const initialState: IUserAuthenticationState =  {
  isLoggingIn: false,
  isSignedIn: false,
  isSignedInUserPackageAdmin: false,
  email: ''
};

export function authentication(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoggingIn: true,
        userName: action.userName
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLoggingIn: true,
        isSignedIn: true,
        isSignedInUserPackageAdmin: false,
        email: action.email
      };
      case userConstants.LOGIN_SUCCESS_Admin:
      return {
        isSignedIn: true,
        isSignedInUserPackageAdmin: true,
        email: action.email
      }
    case userConstants.LOGIN_FAILURE:
      return {
        isLoggingIn: false,
      };
    case userConstants.LOGOUT:
      return {
        isLoggingIn: false,
      };
    default:
      return state
  }
}