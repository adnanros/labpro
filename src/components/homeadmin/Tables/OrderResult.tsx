import { CButton, CCol, CRow } from "@coreui/react";
import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { batchCreateOrderData } from "../../../graphql/customMutations";
import { listChemicalAnalysisChemicals, listChemicalAnalysisResults } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";
import { v4 as uuidv4 } from 'uuid';//npm install -D @types/uuid

class OrderResult extends Component<any,any> {
    constructor(props: any) {
        super(props)
        var caids = props.chemicalAnalysisIds.split(',');
        this.state = {
            chemicalAnalysisIds: caids,
            chemicalAnalysisOrders: props.chemicalAnalysisOrders,
            orderId: props.orderId,
            isResultsExists: 0,//0: unknown, 1: exist, 2: not exist
            isResultsReady: 0//1: data, 2: data3
        }
        this.createResults = this.createResults.bind(this);
    }

    componentDidMount() {
       this.loadData()
    }

    loadData() {
        if (this.state.chemicalAnalysisOrders.length > 0) {
            var chemicalAnalysisOrdersIds = this.state.chemicalAnalysisOrders.map((x:any)=> {return x.id})
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
            this.setState({isResultsExists: 0})
            this.props.getDataList(listChemicalAnalysisResults,filter,this.props.auth.isSignedIn,(success: boolean)=> {
                if(success){
                    this.setState({isResultsExists: 1,isResultsReady: 1})
                }
            })
        }else {
            this.setState({isResultsExists: 2})
        }
    }

    createResults() {
        // export type ModelChemicalAnalysisChemicalFilterInput = {
        //     id?: ModelIDInput | null,
        //     chemicalId?: ModelIDInput | null,
        //     chemicalAnalysisId?: ModelIDInput | null,
        //     and?: Array< ModelChemicalAnalysisChemicalFilterInput | null > | null,
        //     or?: Array< ModelChemicalAnalysisChemicalFilterInput | null > | null,
        //     not?: ModelChemicalAnalysisChemicalFilterInput | null,
        //   };
        var ors: any[] = []
        this.state.chemicalAnalysisIds.forEach((element:any) => {
            ors.push(
                {
                    chemicalAnalysisId: {eq: element}
                }
            );
        });
        var filter: any = {or: ors };
        this.props.getDataList(listChemicalAnalysisChemicals,filter,true,(success: boolean)=> {
            if (success) {
                //$CreateChemicalAnalysisOrders: [CreateChemicalAnalysisOrderInput]
                //$CreateChemicalAnalysisResults: [CreateChemicalAnalysisResultInput]
                var CreateChemicalAnalysisOrderInput: any[] = []
                var CreateChemicalAnalysisResultsInput: any[] = []
                var ChemicalAnalysisChemicals = this.props.data
                
                this.state.chemicalAnalysisIds.forEach((element: any) => {
                    var id = uuidv4();
                    CreateChemicalAnalysisOrderInput.push(
                        {
                        id: id,
                        orderId: this.state.orderId,
                        chemicalAnalysisId: element,
                        }
                    );
                    let chemicalId = ChemicalAnalysisChemicals.find(function (el: any) {
                        return el.chemicalAnalysisId === element;
                    }).chemicalId
                    CreateChemicalAnalysisResultsInput.push(
                        {
                            chemicalAnalysisOrderId: id,
                            chemicalId: chemicalId,
                            detection: 0,
                            resultType: "",
                        }
                    );
                });
                
                var input = {
                    CreateChemicalAnalysisOrders: CreateChemicalAnalysisOrderInput,
                    CreateChemicalAnalysisResults: CreateChemicalAnalysisResultsInput
                }
                this.props.mutateMulti(batchCreateOrderData,input,true, (success: boolean)=> {
                    if(success) {
                        this.setState({isResultsReady: 2,isResultsExists: 1})
                    }
                });

            }else {
                this.setState({isResultsExists: 2})
            }
        })
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
            {
                this.state.isResultsReady === 2 && this.props.data3 && <div>
                {
                    this.props.data3[1].map((item: any,index: any)=> {
                        <CRow key={index}>
                            <CCol>
                            {item.chemical.name}
                            {item.detection}
                            </CCol>
                        </CRow>
                    })
                }
                </div>
            }
             {
                this.state.isResultsReady === 1 && this.props.data && <div>
                {
                    this.props.data.map((item: any,index: any)=> (
                        <CRow key={index}>
                            <CCol>
                            {item.chemical.name}
                            {item.detection}
                            </CCol>
                        </CRow>
                    ))
                }
                </div>
            }
            
        </div>);
    }
}


const mapStateToProps = (state: AppState) => {
    return {
      auth: state.authentication,
      isDataLoading: state.package_admin.dataList2State.isLoadingData,
      isLoadingFailed:state.package_admin.dataList2State.isLoadingFailed,
      isLoadedSuccessfully: state.package_admin.dataList2State.isLoadedSuccessfully,
      data: state.package_admin.dataList2State.data,

      isCreating: state.package_admin.multiQuerydataListState.isLoadingData,
      isCreationFailed:state.package_admin.multiQuerydataListState.isLoadingFailed,
      isCreateSuccesfully: state.package_admin.multiQuerydataListState.isLoadedSuccessfully,
      data3: state.package_admin.multiQuerydataListState.data,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList2,
    mutateMulti: admindataActions.mutateMultiQuery
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);