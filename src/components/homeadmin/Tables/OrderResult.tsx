import { CButton, CCol, CRow } from "@coreui/react";
import { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { listChemicalAnalysisChemicals, listChemicalAnalysisResults } from "../../../graphql/queries";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";
import { v4 as uuidv4 } from 'uuid';//npm install -D @types/uuid

enum ResultsStatus {
    Unknwon,
    NeedCreate,
    NeedLoad,
    Ok
}

class OrderResult extends Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            order: props.order,
            dataStatus: ResultsStatus.Unknwon,
            data: undefined
        }
        this.createResults = this.createResults.bind(this);
    }

    componentDidMount() {
       this.loadData()
    }

    loadData() {
        if ( this.state.order.chemicalAnalysisOrder.items.length > 0) {
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
            this.setState({isResultsExists: 0})
            const queryIdentifier = "ChemicalAnalysisResults"
            this.props.getDataList(queryIdentifier,listChemicalAnalysisResults,filter,this.props.auth.isSignedIn,(success: boolean)=> {
                if(success){
                    this.setState({data: this.props.data[0].items,dataStatus: ResultsStatus.Ok})
                }else {
                    this.setState({data: undefined,dataStatus: ResultsStatus.NeedLoad})
                }
            })
        }else {
            this.setState({data: undefined,dataStatus: ResultsStatus.NeedCreate})
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
        var chemicalAnalysisIds = this.props.order.chemicalAnalysisIds.split(',');
        var ors: any[] = []
        chemicalAnalysisIds.forEach((element:any) => {
            ors.push(
                {
                    chemicalAnalysisId: {eq: element}
                }
            );
        });
        var filter: any = {or: ors };
        const queryIdentifier = "ChemicalAnalysisChemicals"
        this.props.getDataList(queryIdentifier,listChemicalAnalysisChemicals,filter,true,(success: boolean)=> {
            if (success) {
                //$CreateChemicalAnalysisOrders: [CreateChemicalAnalysisOrderInput]
                //$CreateChemicalAnalysisResults: [CreateChemicalAnalysisResultInput]
                var CreateChemicalAnalysisOrderInput: any[] = []
                var CreateChemicalAnalysisResultsInput: any[] = []
                var ChemicalAnalysisChemicals = this.props.data[0].items
                
                chemicalAnalysisIds.forEach((element: any) => {
                    var id = uuidv4();
                    CreateChemicalAnalysisOrderInput.push(
                        {
                        id: id,
                        orderId: this.state.order.id,
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
                const queryIdentifier = "CreateOrder"
                this.props.mutateMulti(queryIdentifier,batchCreateOrderData,input,true, (success: boolean)=> {
                    if(success) {
                        var CreateChemicalAnalysisOrders = this.props.data2[0]
                        var order = this.state.order
                        order.chemicalAnalysisOrder.items = CreateChemicalAnalysisOrders
                        console.log("77777",CreateChemicalAnalysisOrders);
                        console.log(order)
                        var data = this.props.data2[1]
                        this.setState({order: order,data: data, dataStatus:ResultsStatus.Ok})
                    }else {
                        this.setState({data: undefined, dataStatus:ResultsStatus.NeedCreate})
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

            {this.state.dataStatus === ResultsStatus.Unknwon && <div>loading</div>}
            
            {(this.state.dataStatus === ResultsStatus.NeedLoad) && <div>
                <CButton onClick={()=> this.loadData()}>
                    reload
                </CButton>
            </div>
            }

            {(this.state.dataStatus === ResultsStatus.NeedCreate) && <div>
                <CButton onClick={()=> this.createResults()}>
                    create results
                </CButton>
            </div>
            }

            {
                this.state.dataStatus === ResultsStatus.Ok && this.state.data && <div>
                {
                    this.state.data.map((item: any,index: any)=> (
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
      data2: state.package_admin.multiQuerydataListState.data,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList2,
    mutateMulti: admindataActions.mutateMultiQuery
  };

export default connect(mapStateToProps, mapDispatchToProps)(OrderResult);

const batchCreateOrderData = /* GraphQL */ `
  mutation batchCreateOrderData(
    $CreateChemicalAnalysisOrders: [CreateChemicalAnalysisOrderInput]
    $CreateChemicalAnalysisResults: [CreateChemicalAnalysisResultInput]
  ) {
    batchCreateChemicalAnalysisOrders(CreateChemicalAnalysisOrders: $CreateChemicalAnalysisOrders) {
      id
      orderId
      chemicalAnalysisId
      order {
        id
        localUserId
        count
        purchasedDate
        samplingDate
        resultDate
        orderStatus
        paymentStatus
        email
        name
        addressPart1
        addressPart2
        contactNumber
        profileImageLink
        country
        city
        postalCode
        company
        chemicalAnalysisIds
        createdAt
        updatedAt
        owner
        chemicalAnalysisOrder {
          nextToken
        }
      }
      createdAt
      updatedAt
      chemicalAnalysis {
        id
        name
        price
        discount
        description
        createdAt
        updatedAt
        testPackChemicalAnalysis {
          nextToken
        }
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalAnalysisOrder {
          nextToken
        }
      }
      chemicalAnalysisResults {
        items {
          id
          chemicalAnalysisOrderId
          chemicalId
          detection
          resultType
          createdAt
          updatedAt
        }
        nextToken
      }
    },
    batchCreateChemicalAnalysisResults(CreateChemicalAnalysisResults: $CreateChemicalAnalysisResults) {
      id
      chemicalAnalysisOrderId
      chemicalId
      detection
      resultType
      createdAt
      updatedAt
      chemical {
        id
        name
        description
        createdAt
        updatedAt
        chemicalAnalysisChemical {
          nextToken
        }
        chemicalImpacts {
          nextToken
        }
      }
    }
  }
`;