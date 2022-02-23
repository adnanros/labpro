import API from "@aws-amplify/api";
import { alertActions } from ".";
import { dataAdminConstants } from "../_constants";

export const admindataActions = {
    getDataList,
    getDataList2,
    getDataList3,
     deleteItem, 
     createItem,
     updateItem,
     getItemDetail,
};

function getDataList(query: string,filter: any = null,isCognito: true){
    
    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            const result: any = await API.graphql(
                {
                query: query,
                variables: { filter: filter},
                authMode:isCognito ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM"
                }
            ) as Promise<any>
            console.log('List-result',result.data);
            
            dispatch(success(result));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.DATA_LIST_REQUEST } }
    function success(result: any) { return { type: dataAdminConstants.DATA_LIST_SUCCESS, result } }
    function failure(error: string) { return { type: dataAdminConstants.DATA_LIST_FAILURE, error } }

}

function getDataList2(query: string,filter: any = null,isCognito: true){

    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            const result: any = await API.graphql(
                { query: query,
                  variables: { filter: filter},
                  authMode:isCognito ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM"
                }
            ) as Promise<any>
            console.log('List-result',result.data);
            
            dispatch(success(result));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.DATA_LIST2_REQUEST } }
    function success(result: any) { return { type: dataAdminConstants.DATA_LIST2_SUCCESS, result } }
    function failure(error: string) { return { type: dataAdminConstants.DATA_LIST2_FAILURE, error } }

}

function getDataList3(query: string,filter: any = null,isCognito: true){

    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            const result: any = await API.graphql(
                { query: query,
                  variables: { filter: filter},
                  authMode:isCognito ? "AMAZON_COGNITO_USER_POOLS" : "AWS_IAM"
                }
            ) as Promise<any>
            console.log('List-result',result.data);
            
            dispatch(success(result));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.DATA_LIST3_REQUEST } }
    function success(result: any) { return { type: dataAdminConstants.DATA_LIST3_SUCCESS, result } }
    function failure(error: string) { return { type: dataAdminConstants.DATA_LIST3_FAILURE, error } }

}


function deleteItem(mutation: string, id: string, dataListQuery: string){
    console.log('deleting:', id);
    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            const ids = {
                id:id,
            };
            await API.graphql({ query: mutation, variables: {input: ids}});
            
            dispatch(success(id));
            //HERE++++++++++++ getDataList(dataListQuery);
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_DELETE_REQUEST } }
    function success(deletedId: string) { return { type: dataAdminConstants.ITEM_DELETE_SUCCESS, deletedId } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_DELETE_FAILURE, error } }

}

function createItem(mutation: string, inputData: any){
    
    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const createdItemData: any = await API.graphql({ query: mutation, variables: {input: inputData}});
            
            dispatch(success(createdItemData.data));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_CREATE_REQUEST} }
    function success(createdItemData: any) { return { type: dataAdminConstants.ITEM_CREATE_SUCCESS, createdItemData } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_CREATE_FAILURE, error } }
}


function updateItem(mutation: string, inputData: any){
    
    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const updatedItemData: any = await API.graphql({ query: mutation, variables: {input: inputData}});
            
            dispatch(success(updatedItemData.data));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_UPDATE_REQUEST} }
    function success(updatedItemData: any) { return { type: dataAdminConstants.ITEM_UPDATE_SUCCESS, updatedItemData } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_UPDATE_FAILURE, error } }
}

//****** */ Item Detail Action *****************************************//

function getItemDetail(query: string, itemId: any){
    console.log('XXXXX-Dispatch-ID', itemId);

    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const itemDetailData: any = await API.graphql({ query: query, variables: {id: itemId}});
            
            dispatch(success(itemDetailData.data));
            console.log('xxxxx-toState',itemDetailData.data);
            // var tempData: any= Object.values(itemDetailData.data)[0];
            // console.log('xxxxx-testgroups',Object.values(tempData.testGroups.items));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_DETAIL_REQUEST } }
    function success(itemDetailData: any) { return { type: dataAdminConstants.ITEM_DETAIL_SUCCESS, itemDetailData } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_DETAIL_FAILURE, error } }

}


