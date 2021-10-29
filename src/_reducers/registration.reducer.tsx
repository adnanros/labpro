import { AnyAction } from 'redux';
import { IUserRegisterationState, userConstants } from '../_constants';

const initialState: IUserRegisterationState =  {
  isRegistering: false,
  email: ''
};

export function registration(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
         isRegistering: true,
         email: '' 
        };
    case userConstants.REGISTER_SUCCESS:
      return {
        isRegistering: false,
        email: action.email
      };
    case userConstants.REGISTER_FAILURE:
      return initialState;
    default:
      return state
  }
}