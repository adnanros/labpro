import { CButton } from "@coreui/react";
import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { getOrder, listChemicalAnalysisResults } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";


class OrderResult extends Component<any,any> {
    constructor(props: any) {
        super(props)
        
        this.state = {
            chemicalAnalysisIds: props.location.state.chemicalAnalysisIds,
            orderId: props.location.state.orderId,
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
                var order = this.props.data2
                var chemicalAnalysisOrdersIds = order.chemicalAnalysisOrder.items.map((x:any)=> {return x.id})
                if (Array.isArray(chemicalAnalysisOrdersIds), chemicalAnalysisOrdersIds.length > 0) {
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
            }
       })
    }

    createResults() {

    }

    render(){
        return (
        <div>
            {this.props.isGettingData && <div>loading</div>}
            {(this.state.isResultsExists === 2) && <div>
                <CButton onClick={()=> this.createResults()}>
                    create results
                </CButton>
            {
                this.props.data && {

                }
            }
            </div>}
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
      data2: state.package_admin.dataDetailState.loadedItemDetailData
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
    getItem: admindataActions.getItemDetail2,
    
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);