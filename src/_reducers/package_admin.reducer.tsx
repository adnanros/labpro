import { dataAdminConstants, IPackageAdminState } from "../_constants"
import { AnyAction } from 'redux';

const initialState: IPackageAdminState = {
  dataListState: {
    isLoadingData: false,
    isLoadedSuccessfully: false,
    isLoadingFailed: false,
    QueryIdentifier: '',
    data: null,
  },
  dataList2State: {
    isLoadingData: false,
    isLoadedSuccessfully: false,
    isLoadingFailed: false,
    QueryIdentifier: '',
    data: null,
  },
  dataList3State: {
    isLoadingData: false,
    isLoadedSuccessfully: false,
    QueryIdentifier: '',
    isLoadingFailed: false,
    data: null,
  },
  multiQuerydataListState: {
    isLoadingData: false,
    isLoadedSuccessfully: false,
    isLoadingFailed: false,
    QueryIdentifier: '',
    data: null,
  },
  dataDeleteState:
  {
    isDeletingItem: false,
    deletedId: ''
  },
  dataCreateState:
  {
    isCreatingItem: false,
    isCreatedSuccessfully: false,
    createdItemData: null
  },
  dataUpdateState: 
  {
    isUpdatingItem: false,
    isUpdatedSuccessfully: false,
    updatedItemData: null
  },
  dataDetailState:
  {
    isLoaingItemDetail: false,
    isLoadedItemDetailSuccessfully: false,
    loadedItemDetailData: null,
  }
}
  
  export function data_admin(state = initialState, action: AnyAction) {
    switch (action.type) {
      case dataAdminConstants.DATA_LIST_REQUEST:
        return { 
          ...state,
          dataListState:
          {
            isLoadingData : true,
            isLoadedSuccessfully: false,
            isLoadingFailed: false,
            QueryIdentifier: '',    
            data : null
          }
         }
      
      case dataAdminConstants.DATA_LIST_SUCCESS: 
      const items = Object.values(action.result.data) as any;
         return {
          ...state,
           dataListState: {
            isLoadingData : false,
            isLoadedSuccessfully: true,
            isLoadingFailed: false,
            QueryIdentifier: action.queryIdentifier,
            data: items
           }
         }

      case dataAdminConstants.DATA_LIST_FAILURE: 
        return {
          ...state,
          dataListState: {
            isLoadingData: false,
            isLoadedSuccessfully: false,
            isLoadingFailed: true,
            QueryIdentifier: '',
            data: null
          }
        }   

        case dataAdminConstants.DATA_LIST2_REQUEST:
        return { 
          ...state,
          dataList2State:
          {
            isLoadingData : true,
            isLoadedSuccessfully: false,
            isLoadingFailed: false,
            QueryIdentifier: '', 
            data : null
          }
         }
      
      case dataAdminConstants.DATA_LIST2_SUCCESS: 
      const items2 = Object.values(action.result.data)[0] as any;
         return {
          ...state,
           dataList2State: {
            isLoadingData : false,
            isLoadedSuccessfully: true,
            isLoadingFailed: false,
            QueryIdentifier: '', 
            data: items2.items
           }
         }

      case dataAdminConstants.DATA_LIST2_FAILURE: 
        return {
          ...state,
          dataList2State: {
            isLoadingData: false,
            isLoadedSuccessfully: false,
            isLoadingFailed: true,
            QueryIdentifier: '', 
            data: null
          }
        }   

      case dataAdminConstants.DATA_LIST3_REQUEST:
        return { 
          ...state,
          dataList3State:
          {
            isLoadingData : true,
            isLoadedSuccessfully: false,
            isLoadingFailed: false,
            QueryIdentifier: '', 
            data : null
          }
        }
      
      case dataAdminConstants.DATA_LIST3_SUCCESS: 
      const items3 = Object.values(action.result.data)[0] as any;
         return {
          ...state,
           dataList3State: {
            isLoadingData : false,
            isLoadedSuccessfully: true,
            isLoadingFailed: false,
            QueryIdentifier: '', 
            data: items3.items
           }
         }

      case dataAdminConstants.DATA_LIST3_FAILURE: 
        return {
          ...state,
          dataList3State: {
            isLoadingData: false,
            isLoadedSuccessfully: false,
            isLoadingFailed: true,
            QueryIdentifier: '', 
            data: null
          }
        }   

        case dataAdminConstants.MULTI_QUERY_DATA_LIST_REQUEST:
          return { 
            ...state,
            multiQuerydataListState:
            {
              isLoadingData : true,
              isLoadedSuccessfully: false,
              isLoadingFailed: false,
              QueryIdentifier: '', 
              data : null
            }
          }
        
        case dataAdminConstants.MULTI_QUERY_DATA_LIST_SUCCESS: 
        const multiQueryItems = Object.values(action.result.data) as any;
           return {
            ...state,
            multiQuerydataListState: {
              isLoadingData : false,
              isLoadedSuccessfully: true,
              isLoadingFailed: false,
              QueryIdentifier: '', 
              data: multiQueryItems
             }
           }
  
        case dataAdminConstants.MULTI_QUERY_DATA_LIST_FAILURE: 
          return {
            ...state,
            multiQuerydataListState: {
              isLoadingData: false,
              isLoadedSuccessfully: false,
              isLoadingFailed: true,
              QueryIdentifier: '', 
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
          var data: any[] = state.dataListState.data
          if(data !== undefined && data !== null) {
            data[0].items = data[0].items.filter((x: any) => x.id !== deletedId);
          }
          
          return {
            ...state,
            dataListState: {
              isLoadingData: state.dataListState.isLoadingData,
              isLoadedSuccessfully: state.dataListState.isLoadedSuccessfully,
              isLoadingFailed: state.dataListState.isLoadingFailed,
              QueryIdentifier: state.dataListState.QueryIdentifier, 
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
        
        case dataAdminConstants.ITEM_CREATE_REQUEST: 
          return {
            ...state,
            dataCreateState: {
              isCreatingItem: true,
              isCreatedSuccessfully: false,
              createdItemData: null
            }
          }
        case dataAdminConstants.ITEM_CREATE_SUCCESS:
          const newItem1 = Object.values(action.createdItemData)[0] as any;
          var itemsData: any[] = state.dataListState.data;
          
          if(itemsData!==undefined && itemsData!==null)
          {
            itemsData[0]?.items.push(newItem1);
          }

          return {
            ...state,
            dataListState:{
              isLoadingData : state.dataListState.isLoadingData,
              isLoadedSuccessfully: state.dataListState.isLoadedSuccessfully,
              isLoadingFailed: state.dataListState.isLoadingFailed,
              QueryIdentifier: state.dataListState.QueryIdentifier, 
              data: itemsData
            },
            dataCreateState: {
              isCreatingItem: false,
              isCreatedSuccessfully: true,
              createdItemData: action.createdItemData
            }
          }
        case dataAdminConstants.ITEM_CREATE_FAILURE:
          return {
            ...state,
            dataCreateState: {
              isCreatingItem: false,
              isCreatedSuccessfully: false,
              createdItemData: null
            }
          }

          
        case dataAdminConstants.ITEM_UPDATE_REQUEST: 
        return {
          ...state,
          dataUpdateState: {
            isUpdatingItem: true,
            isUpdatedSuccessfully: false,
            updatedItemData: null
          }
        }
        case dataAdminConstants.ITEM_UPDATE_SUCCESS: 
          const newItem = Object.values(action.updatedItemData)[0] as any;
          var itemsData1: any[] = state.dataListState.data;
  
          if(itemsData1!==undefined && itemsData1!==null)
            {
              //replace updated item
              itemsData1[0].items = itemsData1[0].items.map((item:any) => item.id !== newItem.id ? item : newItem);
            }
          
          return {
            ...state,
            dataListState:{
              isLoadingData : state.dataListState.isLoadingData,
              isLoadedSuccessfully: state.dataListState.isLoadedSuccessfully,
              isLoadingFailed: state.dataListState.isLoadingFailed,
              QueryIdentifier: state.dataListState.QueryIdentifier, 
              data: itemsData1
            },
            dataUpdateState: {
              isUpdatingItem: false,
              isUpdatedSuccessfully: true,
              updatedItemData: action.updatedItemData
            }
          }
          case dataAdminConstants.ITEM_UPDATE_FAILURE:
            return {
              ...state,
              dataUpdateState: {
                isUpdatingItem: false,
                isUpdatedSuccessfully: false,
                updatedItemData: null
              }
            }        
          case dataAdminConstants.ITEM_DETAIL_REQUEST: 
            return {
              ...state,
              dataDetailState: {
                isLoaingItemDetail: true,
                isLoadedItemDetailSuccessfully: false,
                loadedItemDetailData: null
              }
          }
          case dataAdminConstants.ITEM_DETAIL_SUCCESS: 
            
            //const itemDetail = Object.values(action.itemDetailData)[0] as any;
            
            return {
              ...state,
              dataDetailState: {
                isLoaingItemDetail: false,
                isLoadedItemDetailSuccessfully: true,
                loadedItemDetailData: action.itemDetailData
              }
          }
          case dataAdminConstants.ITEM_DETAIL_FAILURE:
            return {
              ...state,
              dataDetailState: {
                isLoaingItemDetail: false,
                isLoadedItemDetailSuccessfully: false,
                loadedItemDetailData: null
              }
            }
            
      default:
        return state
    }
  }