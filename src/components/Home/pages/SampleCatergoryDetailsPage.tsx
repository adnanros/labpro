import React, { Component } from 'react'
import { CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CRow } from '@coreui/react'

// routes config
// import routes from '../../routes/routes'
import { admindataActions } from '../../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../../_helpers';
import TestGroupCard from '../subcomponents/TestGroupCard';
import { listTestGroups } from '../../../graphql/queries';

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
        this.props.getDataList(listTestGroups,filter,this.props.auth.isSignedIn);
      }
      
    render(){
        return (
            <div>
            {this.props.isDataLoading && <div>loding</div>}
            {this.props.isLoadingFailed && <div>a refresh button</div>}
            {this.props.isLoadedSuccessfully && <div>
                <CContainer fluid>
                    
                        <CCard style={{width: '100%'}}>
                            <CRow>
                                {
                                    this.props.data &&
                                    this.props.data.map((item: any, index:any) => (
                                        <CCol sm={4} key={index}>
                                            <TestGroupCard name={item.name} description={item.description} 
                                            imageName={'sampleCat1.jpg'} testGroupId={item.id}  />
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
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
  };


export default connect(mapStateToProps, mapDispatchToProps)(SampleCatergoryDetailsPage);
