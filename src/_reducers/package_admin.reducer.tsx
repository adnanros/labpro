import { dataAdminConstants, IPackageAdminState } from "../_constants"
import { AnyAction } from 'redux';

const initialState: IPackageAdminState = {
    isLoadingData: false,
    data: null,

    isDeletingItem: false
  }
  
  export function data_admin(state = initialState, action: AnyAction) {
    console.log('state:', state);
    switch (action.type) {
      case dataAdminConstants.DATA_LIST_REQUEST:
        return { 
          ...state,
          isLoadingData : true,
          data : null
         }
      
      case dataAdminConstants.DATA_LIST_SUCCESS: 
         return {
          ...state,
           isLoadingData : false,
           data: action.result
         }

      case dataAdminConstants.DATA_LIST_FAILURE: 
        return {
          ...state,
          isLoadingData: false,
          data: null
        }   
        case dataAdminConstants.ITEM_DELETE_REQUEST: 
          return {
            ...state,
            isDeletingItem: true,
          }

        case dataAdminConstants.ITEM_DELETE_SUCCESS:
          return {
            ...state,
            isDeletingItem: false,
          }  

        case dataAdminConstants.ITEM_DELETE_FAILURE:
          return {
            ...state,
            isDeletingItem: false
          }  
      default:
        return state
    }
  }