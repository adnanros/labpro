import { CButton } from "@coreui/react";
import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { batchCreateOrderData } from "../../../graphql/customMutations";
import { getOrder, listChemicalAnalysisResults } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";
import { v4 as uuidv4 } from 'uuid';//npm install -D @types/uuid

class OrderResult extends Component<any,any> {
    constructor(props: any) {
        super(props)
        
        this.state = {
            chemicalAnalysisIds: props.chemicalAnalysisIds,
            orderId: props.orderId,
            isResultsExists: 0//0: unknown, 1: exist, 2: not exist
        }

        this.createResults = this.createResults.bind(this);
    }

    componentDidMount() {
       this.loadData()
    }

    loadData() {
        this.props.getItem(getOrder,this.state.orderId, (success: Boolean) => {
            if(success) {
                var order = this.props.data2["getOrder"]
                var chemicalAnalysisOrdersIds = order.chemicalAnalysisOrder.items.map((x:any)=> {return x.id})
                if (Array.isArray(chemicalAnalysisOrdersIds) && chemicalAnalysisOrdersIds.length > 0) {
                    var first = chemicalAnalysisOrdersIds.shift();
                    var f: any = {chemicalAnalysisOrderId: {eq: first } };
                    chemicalAnalysisOrdersIds.forEach((element:any) => {
                        f = {
                            chemicalAnalysisOrderId: {eq: element},
                            or: f
                        }
                    });
                    this.setState({isResultsExists: 0})
                    this.props.getDataList(listChemicalAnalysisResults,f,this.props.auth.isSignedIn)
                }else {
                    //no data. show user that no data is ready
                    this.setState({isResultsExists: 2})
                }
            }else {
                ///
            }
       })
    }

    createResults() {
        //$CreateChemicalAnalysisOrders: [CreateChemicalAnalysisOrderInput]
        //$CreateChemicalAnalysisResults: [CreateChemicalAnalysisResultInput]
        var CreateChemicalAnalysisOrderInput: any[] = []
        var CreateChemicalAnalysisResultsInput: any[] = []
       
        var cIds = this.state.chemicalAnalysisIds.split(',');
        cIds.forEach((element: any) => {
            var id = uuidv4();
            CreateChemicalAnalysisOrderInput.push(
                {
                id: id,
                orderId: this.state.orderId,
                chemicalAnalysisId: element,
                }
            );
            CreateChemicalAnalysisResultsInput.push(
                {
                    chemicalAnalysisOrderId: id,
                    chemicalId: "what",
                    detection: 0,
                    resultType: "",
                }
            );
        });
        
        var input = {
             CreateChemicalAnalysisOrders: CreateChemicalAnalysisOrderInput,
             CreateChemicalAnalysisResults: CreateChemicalAnalysisResultsInput
        }
        console.log("kkkk",input);

        this.props.mutateMulti(batchCreateOrderData,input,true);
    }

    render(){
        return (
        <div>
            {this.props.isGettingData && <div>loading</div>}
            {(this.state.isResultsExists === 2) && <div>
                <CButton onClick={()=> this.createResults()}>
                    create results
                </CButton>
            </div>
            }
            
            
        </div>);
    }
}


const mapStateToProps = (state: AppState) => {
    return {
      auth: state.authentication,
      isDataLoading: state.package_admin.dataListState.isLoadingData,
      isLoadingFailed:state.package_admin.dataListState.isLoadingFailed,
      isLoadedSuccessfully: state.package_admin.dataListState.isLoadedSuccessfully,
      data: state.package_admin.dataListState.data,
      
      isGettingData: state.package_admin.dataDetailState.isLoaingItemDetail,
      isGetSuccessfully: state.package_admin.dataDetailState.isLoadedItemDetailSuccessfully,
      data2: state.package_admin.dataDetailState.loadedItemDetailData,

      isCreating: state.package_admin.multiQuerydataListState.isLoadingData,
      isCreationFailed:state.package_admin.multiQuerydataListState.isLoadingFailed,
      isCreateSuccesfully: state.package_admin.multiQuerydataListState.isLoadedSuccessfully,
      data3: state.package_admin.multiQuerydataListState.data,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
    getItem: admindataActions.getItemDetail2,
    mutateMulti: admindataActions.mutateMultiQuery
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);