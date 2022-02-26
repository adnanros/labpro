export const dataAdminConstants = {
    
    DATA_LIST_REQUEST: 'DATA_LIST_REQUEST',
    DATA_LIST_SUCCESS: 'DATA_LIST_SUCCESS',
    DATA_LIST_FAILURE: 'DATA_LIST_FAILURE',

    ITEM_DELETE_REQUEST: 'ITEM_DELETE_REQUEST',
    ITEM_DELETE_SUCCESS: 'ITEM_DELETE_SUCCESS',
    ITEM_DELETE_FAILURE: 'ITEM_DELETE_FAILURE',

    ITEM_CREATE_REQUEST: 'ITEM_CREATE_REQUEST',
    ITEM_CREATE_SUCCESS: 'ITEM_CREATE_SUCCESS',
    ITEM_CREATE_FAILURE: 'ITEM_CREATE_FAILURE',

    ITEM_UPDATE_REQUEST: 'ITEM_UPDATE_REQUEST',
    ITEM_UPDATE_SUCCESS: 'ITEM_UPDATE_SUCCESS',
    ITEM_UPDATE_FAILURE: 'ITEM_UPDATE_FAILURE',

    ITEM_DETAIL_REQUEST: 'ITEM_DETAIL_REQUEST',
    ITEM_DETAIL_SUCCESS: 'ITEM_DETAIL_SUCCESS',
    ITEM_DETAIL_FAILURE: 'ITEM_DETAIL_FAILURE',

    DATA_LIST2_REQUEST: 'DATA_LIST2_REQUEST',
    DATA_LIST2_SUCCESS: 'DATA_LIST2_SUCCESS',
    DATA_LIST2_FAILURE: 'DATA_LIST2_FAILURE',

    DATA_LIST3_REQUEST: 'DATA_LIST3_REQUEST',
    DATA_LIST3_SUCCESS: 'DATA_LIST3_SUCCESS',
    DATA_LIST3_FAILURE: 'DATA_LIST3_FAILURE',

    MULTI_QUERY_DATA_LIST_REQUEST: 'MULTI_QUERY_DATA_LIST_REQUEST',
    MULTI_QUERY_DATA_LIST_SUCCESS: 'MULTI_QUERY_DATA_LIST_SUCCESS',
    MULTI_QUERY_DATA_LIST_FAILURE: 'MULTI_QUERY_DATA_LIST_FAILURE',


}

export interface DataListState{
    isLoadingData: boolean,
    isLoadedSuccessfully: boolean,
    isLoadingFailed: boolean,
    data: any,
}

export interface DataDeleteState{
    isDeletingItem: boolean,
    deletedId: string
}

export interface DataCreateState {
    isCreatingItem: boolean,
    isCreatedSuccessfully: boolean,
    createdItemData: any,
}

export interface DataUpdateState {
    isUpdatingItem: boolean,
    isUpdatedSuccessfully: boolean,
    updatedItemData: any,
}

export interface DataDetailState {
    isLoaingItemDetail: boolean,
    isLoadedItemDetailSuccessfully: boolean,
    loadedItemDetailData: any,
}

export interface IPackageAdminState {
    dataListState: DataListState,
    dataList2State: DataListState,
    dataList3State: DataListState,
    multiQuerydataListState: DataListState,
    dataDeleteState: DataDeleteState,
    dataCreateState: DataCreateState,
    dataUpdateState: DataUpdateState,
    dataDetailState: DataDetailState,

}