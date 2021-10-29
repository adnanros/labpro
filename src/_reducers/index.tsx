import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { confirm_registration } from './confirm_registeration.reducer';
import { alert } from './alert.reducer';
import { IAlertState, IUserAuthenticationState, IUserRegisterationState } from '../_constants';

export interface ReduxState {
  authentication: IUserAuthenticationState,
  registeration: IUserRegisterationState,
  alert: IAlertState
}

const rootReducer = combineReducers(
{
  authentication: authentication,
  registration: registration,
  confirm_registartion: confirm_registration,
  alert: alert
});

export default rootReducer;