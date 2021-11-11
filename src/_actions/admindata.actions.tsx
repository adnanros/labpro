import API from "@aws-amplify/api";
import { alertActions } from ".";
import { dataAdminConstants } from "../_constants";

export const admindataActions = {
    getDataList, deleteItem,
};

function getDataList(query: string){

    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            const result: any = await API.graphql(
                {query: query}
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
