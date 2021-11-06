import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { confirm_registration } from './confirm_registeration.reducer';
import { alert } from './alert.reducer';
import { IAlertState, IPackageAdminState, IUserAuthenticationState, IUserRegisterationState } from '../_constants';
import { data_admin } from './package_admin.reducer';

export interface ReduxState {
  authentication: IUserAuthenticationState,
  registeration: IUserRegisterationState,
  alert: IAlertState,
  package_admin: IPackageAdminState
}

const rootReducer = combineReducers(
{
  authentication: authentication,
  registration: registration,
  confirm_registartion: confirm_registration,
  alert: alert,
  package_admin: data_admin
});

export default rootReducer;