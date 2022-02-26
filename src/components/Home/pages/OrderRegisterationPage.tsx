import { CCol, CRow } from "@coreui/react";
import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { getLocalUser, listChemicalAnalysisChemicals } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";

class OrderRegisterationPage extends Component<any,any> {
    constructor(props: any) {
        super(props)
        console.log("qqqq",this.props.location.state.chemicalAnalysis)
        this.state = {
            chemicalAnalysis: this.props.location.state.chemicalAnalysis
        }
    }
    
    componentDidMount() {
        var variables = {email: this.props.auth.email}
        this.props.getDetails(getLocalUser,variables)
    }

    doRegister = () => {
        
    }
    render(){
        if(this.props.isLoaingItemDetail) {
            return (<div></div>);
        }

        return (
        <div>
            {
            this.state.chemicalAnalysis.map((item: any,index: any) => (
                <CRow key={index}>
                    <CCol>
                        {item.chemicalAnalysis.name}
                    </CCol>
                </CRow>
            )
            )
            }
        </div>);
    }
}

const mapStateToProps = (state: AppState) => {
    return {
      auth: state.authentication,
      isDataLoading: state.package_admin.dataDetailState.isLoaingItemDetail,
      isLoadedSuccessfully: state.package_admin.dataDetailState.isLoadedItemDetailSuccessfully,
      data: state.package_admin.dataDetailState.loadedItemDetailData,
    }
  };
  
  const mapDispatchToProps  = {
    getDetails: admindataActions.getItemDetailByKeyValue,
  };


export default connect(mapStateToProps, mapDispatchToProps)(OrderRegisterationPage);
