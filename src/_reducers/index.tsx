import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { confirm_registration } from './confirm_registeration.reducer';
import { alert } from './alert.reducer';
import { IAlertState, IPackageAdminState, IUserAuthenticationState, IUserRegisterationState } from '../_constants';
import { package_admin_change_state } from './package_admin.reducer';

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
  package_admin: package_admin_change_state
});

export default rootReducer;