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
        this.props.getDataList(listTestGroups);
      }

      testGrouList = this.props.data?.find(
          (item: any)=>(item.sampleCategoryId === this.props.sampleCategoryId)
      );
      
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
                                    this.testGrouList &&
                                    this.testGrouList.map((item: any, index:any) => (
                                        <CCol sm={4} key={index}>
                                            <TestGroupCard name={item.name} description={item.description} 
                                            imageName={'sampleCat1.jpg'} testGroupId={item.id} testPacks={item.testPacks} />
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
