import API from "@aws-amplify/api";
import { alertActions } from ".";
import { dataAdminConstants } from "../_constants";
type BoolCallback = (n: Boolean) => any;

export const admindataActions = {
    mutateMultiQuery,
    getDataList,
    getDataList2,
    getDataList3,
     deleteItem, 
     createItem,
     updateItem,
     getItemDetail,
     getItemDetail2,
     getItemDetailByKeyValue
};

function mutateMultiQuery(queryIdentifier: string,query: string,inputData: any = null,isCognito: Boolean = true, completionHandler?: BoolCallback){
    
    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            if (isCognito) {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: inputData
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(typeof completionHandler !== "undefined") {
                    completionHandler(true)
                }
            }else {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: inputData,
                    authMode: "AWS_IAM"
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                dispatch(success(result,queryIdentifier));
                if(typeof completionHandler !== "undefined") {
                    completionHandler(true)
                }
            }
            
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
            if(typeof completionHandler !== "undefined") {
                completionHandler(false)
            }
        }
    };

    function request() { return { type: dataAdminConstants.MULTI_QUERY_DATA_LIST_REQUEST } }
    function success(result: any,queryIdentifier: string) { return { type: dataAdminConstants.MULTI_QUERY_DATA_LIST_SUCCESS, result, queryIdentifier } }
    function failure(error: string) { return { type: dataAdminConstants.MULTI_QUERY_DATA_LIST_FAILURE, error } }
}

function getDataList(queryIdentifier: string,query: string,filter: any = null,isCognito: Boolean = true, completionHandler?: BoolCallback){
    
    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            if (isCognito) {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: { filter: filter}
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(completionHandler !== undefined){
                    completionHandler(true);
                }
                
            }else {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: { filter: filter},
                    authMode: "AWS_IAM"
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(completionHandler !== undefined){
                    completionHandler(true);
                }
            }
            
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
            if(completionHandler !== undefined){
                completionHandler(false);
            }
        }
    };

    function request() { return { type: dataAdminConstants.DATA_LIST_REQUEST } }
    function success(result: any, queryIdentifier: string) { return { type: dataAdminConstants.DATA_LIST_SUCCESS, result, queryIdentifier } }
    function failure(error: string) { return { type: dataAdminConstants.DATA_LIST_FAILURE, error } }
}

function getDataList2(queryIdentifier: string, query: string,filter: any = null,isCognito: Boolean = true, completionHandler?: BoolCallback){

    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            if (isCognito) {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: { filter: filter}
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(completionHandler !== undefined){
                    completionHandler(true);
                }
            }else {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: { filter: filter},
                    authMode: "AWS_IAM"
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(completionHandler !== undefined){
                    completionHandler(true);
                }
            }
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
            if(completionHandler !== undefined){
                completionHandler(false);
            }
        }
    };

    function request() { return { type: dataAdminConstants.DATA_LIST2_REQUEST } }
    function success(result: any,queryIdentifier: string) { return { type: dataAdminConstants.DATA_LIST2_SUCCESS, result, queryIdentifier } }
    function failure(error: string) { return { type: dataAdminConstants.DATA_LIST2_FAILURE, error } }

}

function getDataList3(queryIdentifier: string,query: string,filter: any = null,isCognito: Boolean = true, completionHandler?: BoolCallback){

    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            if (isCognito) {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: { filter: filter}
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(completionHandler !== undefined){
                    completionHandler(true);
                }
            }else {
                const result: any = await API.graphql(
                    {
                    query: query,
                    variables: { filter: filter},
                    authMode: "AWS_IAM"
                    }
                ) as Promise<any>
                console.log('List-result',result.data);
                
                dispatch(success(result,queryIdentifier));
                if(completionHandler !== undefined){
                    completionHandler(true);
                }
            }
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure('load list failed'));
            dispatch(alertActions.error(error.toString()));
            if(completionHandler !== undefined){
                completionHandler(false);
            }
        }
    };

    function request() { return { type: dataAdminConstants.DATA_LIST3_REQUEST } }
    function success(result: any,queryIdentifier: string) { return { type: dataAdminConstants.DATA_LIST3_SUCCESS, result,queryIdentifier } }
    function failure(error: string) { return { type: dataAdminConstants.DATA_LIST3_FAILURE, error } }

}

function deleteItem(mutation: string, id: string, completionHandler?: BoolCallback){
    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            const ids = {
                id:id,
            };
            await API.graphql({ query: mutation, variables: {input: ids}});
            
            dispatch(success(id));
            if(completionHandler !== undefined){
                completionHandler(true);
            }
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
            if(completionHandler !== undefined){
                completionHandler(false);
            }
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_DELETE_REQUEST } }
    function success(deletedId: string) { return { type: dataAdminConstants.ITEM_DELETE_SUCCESS, deletedId } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_DELETE_FAILURE, error } }

}

function createItem(mutation: string, inputData: any,completionHandler?: BoolCallback){
    
    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const createdItemData: any = await API.graphql({ query: mutation, variables: {input: inputData}});
            
            dispatch(success(createdItemData.data));

            if(completionHandler !== undefined){
                completionHandler(true);
            }
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
            if(completionHandler !== undefined){
                completionHandler(false);
            }
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_CREATE_REQUEST} }
    function success(createdItemData: any) { return { type: dataAdminConstants.ITEM_CREATE_SUCCESS, createdItemData } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_CREATE_FAILURE, error } }
}


function updateItem(mutation: string, inputData: any, completionHandler?: BoolCallback){
    
    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const updatedItemData: any = await API.graphql({ query: mutation, variables: {input: inputData}});
            
            dispatch(success(updatedItemData.data));
            if(completionHandler !== undefined){
                completionHandler(true);
            }
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
            if(completionHandler !== undefined){
                completionHandler(false);
            }
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_UPDATE_REQUEST} }
    function success(updatedItemData: any) { return { type: dataAdminConstants.ITEM_UPDATE_SUCCESS, updatedItemData } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_UPDATE_FAILURE, error } }
}

//****** */ Item Detail Action *****************************************//

function getItemDetail(query: string, itemId: any){
    //console.log('XXXXX-Dispatch-ID', itemId);

    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const itemDetailData: any = await API.graphql({ query: query, variables: {id: itemId}});
            
            dispatch(success(itemDetailData.data));
            //console.log('xxxxx-toState',itemDetailData.data);
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

function getItemDetail2(query: string, itemId: any,myCompletionHandler: BoolCallback){
    //console.log('XXXXX-Dispatch-ID', itemId);

    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const itemDetailData: any = await API.graphql({ query: query, variables: {id: itemId}});
            
            dispatch(success(itemDetailData.data));
            myCompletionHandler(true);
            //console.log('xxxxx-toState',itemDetailData.data);
            // var tempData: any= Object.values(itemDetailData.data)[0];
            // console.log('xxxxx-testgroups',Object.values(tempData.testGroups.items));
        } catch(error: any)
        {
            console.log(error);
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()));
            myCompletionHandler(false);
        }
    };

    function request() { return { type: dataAdminConstants.ITEM_DETAIL_REQUEST } }
    function success(itemDetailData: any) { return { type: dataAdminConstants.ITEM_DETAIL_SUCCESS, itemDetailData } }
    function failure(error: string) { return { type: dataAdminConstants.ITEM_DETAIL_FAILURE, error } }
}

function getItemDetailByKeyValue(query: string, variables: {}){
    //console.log('XXXXX-Dispatch-ID', itemId);

    return async (dispatch: (arg0: { type: string; error?: string; }) => void) => {
        dispatch(request());
        try{
            
            const itemDetailData: any = await API.graphql({ query: query, variables: variables});
            
            dispatch(success(itemDetailData.data));
            //console.log('xxxxx-toState',itemDetailData.data);
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


