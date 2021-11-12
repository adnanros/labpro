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


}

export interface DataListState{
    isLoadingData: boolean,
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

export interface IPackageAdminState {
    dataListState: DataListState,
    dataDeleteState: DataDeleteState,
    dataCreateState: DataCreateState
}