import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";


class ResultListPage extends Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            chemicalAnalysisIds: props.location.state.chemicalAnalysisIds,
            orderId: props.location.state.orderId,
        }
    }

    componentDidMount() {

    }

    render(){
        return (
        <div>
            result List
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
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
  };


export default connect(mapStateToProps, mapDispatchToProps)(ResultListPage);
