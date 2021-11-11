import { dataAdminConstants, IPackageAdminState } from "../_constants"
import { AnyAction } from 'redux';

const initialState: IPackageAdminState = {
    dataListState: {
      isLoadingData: false,
      data: null,
    },
    dataDeleteState:
    {
      isDeletingItem: false,
      deletedId: ''
    }
  }
  
  export function data_admin(state = initialState, action: AnyAction) {
    console.log('state:', state);
    switch (action.type) {
      case dataAdminConstants.DATA_LIST_REQUEST:
        return { 
          ...state,
          dataListState:
          {
            isLoadingData : true,
            data : null
          }
         }
      
      case dataAdminConstants.DATA_LIST_SUCCESS: 
      const items = Object.values(action.result.data)[0] as any;
         return {
          ...state,
           dataListState: {
            isLoadingData : false,
            data: items.items
           }
         }

      case dataAdminConstants.DATA_LIST_FAILURE: 
        return {
          ...state,
          dataListState: {
            isLoadingData: false,
            data: null
          }
        }   
        case dataAdminConstants.ITEM_DELETE_REQUEST: 
          return {
            ...state,
            dataDeleteState: {
              isDeletingItem: true,
              deletedId: ''
            }
          }

        case dataAdminConstants.ITEM_DELETE_SUCCESS:
          const deletedId = action.deletedId;
          const data = state.dataListState.data?.filter((x: any) => x.id !== deletedId);
          return {
            dataListState: {
              isLoadingData: state.dataListState.isLoadingData,
              data: data
            },
            dataDeleteState: {
              isDeletingItem: false,
              deletedId: ''
            }
          }  

        case dataAdminConstants.ITEM_DELETE_FAILURE:
          return {
            ...state,
            dataDeleteState: {
              isDeletingItem: false,
              deletedId: ''
            }
          }  
      default:
        return state
    }
  }