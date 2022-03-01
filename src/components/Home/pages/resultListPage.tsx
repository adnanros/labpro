import { CCol, CRow } from "@coreui/react";
import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { getOrder, listChemicalAnalysisResults } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";


class ResultListPage extends Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            chemicalAnalysisIds: props.location.state.chemicalAnalysisIds,
            orderId: props.location.state.orderId,
            orderLoadState: 0,//0: unknown, 1: suuccess,2 failure
            chemicalAnalysisResultsStatus: 0//0: unknown, 1: suuccess,2 failure
        }
    }

    componentDidMount() {
       this.loadData()
    }

    loadData() {
        this.props.getItem(getOrder,this.state.orderId, (success: Boolean) => {
            if(success) {
                this.setState({orderLoadState: 1})
                var order = this.props.data2["getOrder"]
                
                var chemicalAnalysisOrdersIds = order.chemicalAnalysisOrder.items.map((x:any)=> {return x.id})
                if (Array.isArray(chemicalAnalysisOrdersIds) && chemicalAnalysisOrdersIds.length > 0) {
                    var ors: any[] = []
                    // export type ModelChemicalAnalysisResultFilterInput = {
                    //     id?: ModelIDInput | null,
                    //     chemicalAnalysisOrderId?: ModelIDInput | null,
                    //     chemicalId?: ModelIDInput | null,
                    //     detection?: ModelFloatInput | null,
                    //     resultType?: ModelStringInput | null,
                    //     and?: Array< ModelChemicalAnalysisResultFilterInput | null > | null,
                    //     or?: Array< ModelChemicalAnalysisResultFilterInput | null > | null,
                    //     not?: ModelChemicalAnalysisResultFilterInput | null,
                    //   };
                    chemicalAnalysisOrdersIds.forEach((element:any) => {
                        ors.push(
                            {
                                chemicalAnalysisOrderId: {eq: element}
                            }
                        );
                    });
                    var filter: any = {or: ors };
                    this.props.getDataList(listChemicalAnalysisResults,filter,this.props.auth.isSignedIn,(succes: boolean)=> {
                        if(succes) {
                            if(this.props.data.length === 0) {
                                this.setState({chemicalAnalysisResultsStatus: 2})
                            }else {
                                this.setState({chemicalAnalysisResultsStatus: 1})
                            }
                            
                        }else {
                            this.setState({chemicalAnalysisResultsStatus: 2})
                        }
                    })
                }else {
                    //no data. show user that no data is ready
                    this.setState({chemicalAnalysisResultsStatus: 2})
                }
            }else {
                this.setState({orderLoadState: 2})
            }
       })
    }

    render(){
        return (
        <div>
            {(this.state.chemicalAnalysisResultsStatus === 0) && <div> loading</div>}
            {(this.state.chemicalAnalysisResultsStatus === 2) && <div> your results is not ready</div>}
            {(this.state.chemicalAnalysisResultsStatus === 1) && <div> 
                {
                    this.props.data &&
                    this.props.data.map((item: any, index:any) => (
                        <CRow key={index}>
                            <CCol sm={4} >
                               chemical:  {item.chemical.name}
                               detection:  {item.detection}

                            </CCol>
                        </CRow>
                        
                    ))
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
    getItem: admindataActions.getItemDetail2
  };


export default connect(mapStateToProps, mapDispatchToProps)(ResultListPage);
