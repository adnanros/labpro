import API from "@aws-amplify/api";
import { alertActions } from ".";
import { dataAdminConstants } from "../_constants";

export const admindataActions = {
    getDataList
};

function getDataList(query: string){

    return async (dispatch: (arg0: { type: string; user?: any; error?: string; message?: string; }) => void) => {
        dispatch(request());
        try{
            const result: any = await API.graphql(
                {query: query}
            ) as {}
            console.log('List-result', result);
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
