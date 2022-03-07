import { CCard, CCol, CContainer, CRow } from "@coreui/react";
import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getOrder, listChemicalAnalysisResults } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";
import { ProgressbarSt } from "../../ui/ProgressbarSt";

const queryIdentifier = "ChemicalAnalysisResults";
class ResultListPage extends Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            order: props.location.state.order,
            chemicalAnalysisResultsStatus: 0//0: loading, 1: not ready,2 loaded
        }
    }

    componentDidMount() {
       this.loadData()
    }

    progressBarContainer = 200;

    loadData() {
        if(this.state.order.chemicalAnalysisOrder.items.length === 0) {
            this.setState({chemicalAnalysisResultsStatus: 1 })
        }else {
            var chemicalAnalysisOrdersIds = this.state.order.chemicalAnalysisOrder.items.map((x:any)=> {return x.id})
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
            this.props.getDataList(queryIdentifier,listChemicalAnalysisResults,filter,this.props.auth.isSignedIn,(succes: boolean)=> {
                if(succes) {
                    if(this.props.data.length === 0) {
                        this.setState({chemicalAnalysisResultsStatus: 1})
                    }else {
                        this.setState({chemicalAnalysisResultsStatus: 2})
                    }
                    
                }else {
                    this.setState({chemicalAnalysisResultsStatus: 1})
                }
            })
        }
    }

    render(){
        return (
        <div>
            <CContainer fluid>
                    
                <CCard className='p-4' style={{width: '100%'}}>
                {(this.state.chemicalAnalysisResultsStatus === 0) && <div> loading</div>}
                {(this.state.chemicalAnalysisResultsStatus === 1) && <div> your results is not ready</div>}
                {(this.state.chemicalAnalysisResultsStatus === 2) && <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Chemical Title</th>
                            <th scope="col">Detection</th>
                            <th scope="col">Comparison</th>
                            <th scope="col">Impacts</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.queryIdentifier === queryIdentifier && this.props.data &&
                                this.props.data[0].items.map((item: any, index:any) => (
                                    <tr key={index} className="clickable-row">
                                        <th scope="row">{item.chemical.name}</th>
                                        <td>{item.detection}</td>
                                        <td>
                                            <ProgressbarSt 
                                            width={this.progressBarContainer}
                                            height={10}
                                            standard={2.1} 
                                            amount={2}/>    
                                        </td>
                                        <td>
                                            health
                                        </td>
                                        <td>
                                            <Link to={{
                                                pathname: "/resultDetail",
                                                state: {chemicalAnalysisIds: item.chemicalAnalysisIds,orderId: item.id }//to get: this.props.location.state.chemicalAnalysisIds
                                                }}>Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table> 
                    </div>}
                </CCard>
            </CContainer>
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
      queryIdentifier: state.package_admin.dataListState.QueryIdentifier
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList
  };


export default connect(mapStateToProps, mapDispatchToProps)(ResultListPage);
