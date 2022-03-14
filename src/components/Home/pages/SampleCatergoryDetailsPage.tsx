import React, { Component } from 'react'
import { CCard, CCol, CContainer, CRow } from '@coreui/react'

// routes config
// import routes from '../../routes/routes'
import { admindataActions } from '../../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../../_helpers';
import TestGroupCard from '../subcomponents/TestGroupCard';
const queryIdentifier = "SampleCatergoryDetails"
class SampleCatergoryDetailsPage extends Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
        }
      }
  
      componentDidMount(){
        let filter = {
            sampleCategoryId: {
                eq: this.props.location.state.id // filter priority = 1
            }
        };
        this.props.getDataList(queryIdentifier,listData,filter,this.props.auth.isSignedIn);
      }
      
    render(){
        return (
            <div className=''>
            {this.props.isDataLoading && 
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
            </button>}
            {this.props.isLoadingFailed && <div>a refresh button</div>}
            {this.props.isLoadedSuccessfully && <div>
                <CContainer fluid>
                    
                        <CCard style={{width: '100%'}} className='p-3'>
                            <CRow>
                                {
                                    this.props.queryUdentifier === queryIdentifier && this.props.data &&
                                    this.props.data[0]?.items.map((item: any, index:any) => (
                                        <CCol sm={4} key={index}>
                                            <TestGroupCard 
                                            name={item.name} 
                                            description={item.description} 
                                            imageName={"sampleCat1.jpg"} 
                                            testGroupId={item.id} 
                                            testGroupTestPacks={this.props.data[1].items} 
                                            TestPackChemicalAnalysis={this.props.data[2].items}   />
                                        </CCol>
                                    ))
                                }
                            </CRow>
                        </CCard>
                </CContainer>
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
      queryUdentifier: state.package_admin.dataListState.QueryIdentifier
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
  };


export default connect(mapStateToProps, mapDispatchToProps)(SampleCatergoryDetailsPage);

const listData = /* GraphQL */ `
  query ListTestGroups(
    $filter: ModelTestGroupFilterInput
    $limit: Int
    $nextToken: String
    $filter2: ModelTestGroupTestPackFilterInput
    $limit2: Int
    $nextToken2: String
    $filter3: ModelTestPackChemicalAnalysisFilterInput
    $limit3: Int
    $nextToken3: String
  ) {
    listTestGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        includedTestsDesc
        includedReportsDesc
        sampleCategoryId
        createdAt
        updatedAt
        testGroupTestPack {
          nextToken
        }
      }
      nextToken
    },
    listTestGroupTestPacks(
      filter: $filter2
      limit: $limit2
      nextToken: $nextToken2
    ) {
      items {
        id
        testPackId
        testGroupId
        createdAt
        updatedAt
        testgroup {
          id
          name
          description
          includedTestsDesc
          includedReportsDesc
          sampleCategoryId
          createdAt
          updatedAt
        }
        testpack {
          id
          name
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    },
    listTestPackChemicalAnalysiss(
      filter: $filter3
      limit: $limit3
      nextToken: $nextToken3
    ) {
      items {
        id
        testPackId
        chemicalAnalysisId
        createdAt
        updatedAt
        testpack {
          id
          name
          description
          createdAt
          updatedAt
        }
        chemicalAnalysis {
          id
          name
          price
          discount
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;