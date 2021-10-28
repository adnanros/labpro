import { AnyAction } from 'redux';
import { alertConstants, IAlertState } from '../_constants';

const initialState: IAlertState = {
  type : '',
  message : ''
}

export function alert(state = initialState, action: AnyAction) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}