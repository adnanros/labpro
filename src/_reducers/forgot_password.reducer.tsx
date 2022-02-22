import { AnyAction } from 'redux';
import { IUserSendForgotPassordState, userConstants } from '../_constants';

const initialState: IUserSendForgotPassordState =  {
  isSending: false,
};
//resetting password has two steps: 1s: user enter the email, a code will be sent to the email. 
// 2nd: user will resend the email, the code and new password to reset his pasword.
export function reset_password(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userConstants.SEND_ForgotPassword_CODE_REQUEST:
      return { isSending: true };
    case userConstants.SEND_ForgotPassword_CODE_SUCCESS:
      return {
        isSending: false
      };
    case userConstants.SEND_ForgotPassword_CODE_FAILURE:
      return {
        isSending: false
      };
    case userConstants.Reset_Password_REQUEST:
        return {
            isSending: true
        };
    case userConstants.Reset_Password_SUCCESS:
          return {
            isSending: true
          };
    case userConstants.Reset_Password_FAILURE:
      return {
        isSending: false
      };
    default:
      return state
  }
}