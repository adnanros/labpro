import { dataAdminConstants, IPackageAdminState } from "../_constants"
import { AnyAction } from 'redux';

const initialState: IPackageAdminState = {
    isLoadingData: false,
    data: null
  }
  
  export function data_admin(state = initialState, action: AnyAction) {
    console.log('state:', state);
    switch (action.type) {
      case dataAdminConstants.DATA_LIST_REQUEST:
        return { 
          isLoadingData : true,
          data : null
         }
      
      case dataAdminConstants.DATA_LIST_SUCCESS: 
         return {
           isLoadingData : false,
           data: action.result
         }

      case dataAdminConstants.DATA_LIST_FAILURE: 
        return {
          isLoadingData: false,
          data: null
        }   
      default:
        return state
    }
  }