export const dataAdminConstants = {
    
    DATA_LIST_REQUEST: 'DATALIST_REQUEST',
    DATA_LIST_SUCCESS: 'DATA_LIST_SUCCESS',
    DATA_LIST_FAILURE: 'DATA_LIST_FAILURE',
}

export interface IPackageAdminState {
    isLoadingData: boolean,
    data: any
}