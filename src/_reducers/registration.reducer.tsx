import { AnyAction } from 'redux';
import { IUserRegisterationState, userConstants } from '../_constants';

const initialState: IUserRegisterationState =  {
  isRegistering: false,
};

export function registration(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { isRegistering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}