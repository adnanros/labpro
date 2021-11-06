import { dataAdminConstants, IPackageAdminState } from "../_constants"
import { AnyAction } from 'redux';

const initialState: IPackageAdminState = {
    isLoadingData: false,
    data: {}
  }
  
  export function data_admin(state = initialState, action: AnyAction) {
    switch (action.type) {
      case dataAdminConstants.DATA_LIST_REQUEST:
        return { 
          isLoadingData : true,
          data : {}
         }
      
      case dataAdminConstants.DATA_LIST_SUCCESS: 
         return {
           isLoadingData : false,
           data: {}
         }

      case dataAdminConstants.DATA_LIST_FAILURE: 
        return {
          isLoadingData: false,
          data: {}
        }   
      default:
        return state
    }
  }