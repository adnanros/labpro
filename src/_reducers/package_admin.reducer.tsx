import { IPackageAdminState } from "../_constants"
import { AnyAction } from 'redux';

const initialState: IPackageAdminState = {
    sidebarShow: false,
  }
  
  export function package_admin_change_state(state = initialState, action: AnyAction, ...rest: any[] ) {
    switch (action.type) {
      case 'set':
        return { ...state, ...rest }
      default:
        return state
    }
  }