export const dataAdminConstants = {
    
    DATA_LIST_REQUEST: 'DATA_LIST_REQUEST',
    DATA_LIST_SUCCESS: 'DATA_LIST_SUCCESS',
    DATA_LIST_FAILURE: 'DATA_LIST_FAILURE',

    ITEM_DELETE_REQUEST: 'ITEM_DELETE_REQUEST',
    ITEM_DELETE_SUCCESS: 'ITEM_DELETE_SUCCESS',
    ITEM_DELETE_FAILURE: 'ITEM_DELETE_FAILURE',

}

export interface IPackageAdminState {
    isLoadingData: boolean,
    data: any,

    isDeletingItem: boolean,
}