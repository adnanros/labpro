import { CButton, CCard, CCardBody, CCardText, CCardTitle, CLink, } from "@coreui/react";
import { Component } from "react";
import { connect } from "react-redux";
import { admindataActions } from "../../../_actions";
import { AppState } from "../../../_helpers";

interface IProps {
    name: string;
    description: string;
    imageName: string;
    testGroupId: string;
    //testPacks: {};
}

class TestGroupCard extends Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
        }
      }
  
      componentDidMount(){
        // let filter = {
        //     sampleCategoryId: {
        //         eq: this.props.location.state.id // filter priority = 1
        //     }
        // };
        //this.props.getDataList(listTestGroups,filter,this.props.auth.isSignedIn);
      }
      
    render(){
        return (
            <div>
            <CCard style={{ width: '18rem' }}>
                <img width={'100%'} height={'100%'} src={require('../../../Assets/images/'+this.props.imageName).default}/>
                <CCardBody>
                    <CCardTitle>{this.props.name}</CCardTitle>
                    <CCardText>
                        {/* {props.testPacks} */}
                    </CCardText>
                    <CButton href="/sampleCategoryDetails">Details</CButton>
                </CCardBody>
            </CCard>
        </div>
            );
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


export default connect(mapStateToProps, mapDispatchToProps)(TestGroupCard);