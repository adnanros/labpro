import { AnyAction } from 'redux';
import { IUserConfirmRegisterationState, userConstants } from '../_constants';

const initialState: IUserConfirmRegisterationState =  {
  isConfirming: false,
};

export function confirm_registration(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userConstants.CONFIRM_REGISTER_REQUEST:
      return { isConfirming: true };
    case userConstants.CONFIRM_REGISTER_SUCCESS:
      return {
        isConfirming: false
      };
    case userConstants.CONFIRM_REGISTER_FAILURE:
      return {
        isConfirming: false
      };
    case userConstants.REGISTER_SUCCESS:
        return {
          isConfirming: false
        };
    case userConstants.RESEND_REGISTER_CODE_REQUEST:
          return {
            isConfirming: true
          };
    case userConstants.RESEND_REGISTER_CODE_FAILURE:
      return {
        isConfirming: false
      };
    case userConstants.RESEND_REGISTER_CODE_SUCCESS:
        return {
          isConfirming: false
        };
    default:
      return state
  }
}