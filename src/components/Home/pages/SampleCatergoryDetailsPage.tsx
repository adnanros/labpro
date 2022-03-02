import React, { Component } from 'react'
import { CCard, CCol, CContainer, CRow } from '@coreui/react'

// routes config
// import routes from '../../routes/routes'
import { admindataActions } from '../../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../../_helpers';
import TestGroupCard from '../subcomponents/TestGroupCard';
import { sampleCategoryDetailsQuery } from '../../../graphql/customQueries';

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
        this.props.getDataList(sampleCategoryDetailsQuery,filter,this.props.auth.isSignedIn);
      }
      
    render(){
        return (
            <div>
            {this.props.isDataLoading && 
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
            </button>}
            {this.props.isLoadingFailed && <div>a refresh button</div>}
            {this.props.isLoadedSuccessfully && <div>
                <CContainer fluid>
                    
                        <CCard style={{width: '100%'}}>
                            <CRow>
                                {
                                    this.props.data &&
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
      isDataLoading: state.package_admin.multiQuerydataListState.isLoadingData,
      isLoadingFailed:state.package_admin.multiQuerydataListState.isLoadingFailed,
      isLoadedSuccessfully: state.package_admin.multiQuerydataListState.isLoadedSuccessfully,
      data: state.package_admin.multiQuerydataListState.data,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataListMultiQuery,
  };


export default connect(mapStateToProps, mapDispatchToProps)(SampleCatergoryDetailsPage);

