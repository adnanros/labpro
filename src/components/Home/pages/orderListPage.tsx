import React, { Component } from 'react'
import { CCard, CCol, CContainer, CRow } from '@coreui/react'

// routes config
// import routes from '../../routes/routes'
import { admindataActions } from '../../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../../_helpers';
import { listOrders } from '../../../graphql/queries';
import { Link } from 'react-router-dom';

class OrderListPage extends Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
        }
      }
  
      componentDidMount(){
        let filter = {
            localUserId: {
                eq: this.props.auth.email
            }
        };
        this.props.getDataList(listOrders,filter,this.props.auth.isSignedIn);
      }
      
    render(){
        console.log("eee",this.props.data);
        return (
            <div>
            {this.props.isDataLoading && <div>loding</div>}
            {this.props.isLoadingFailed && <div>a refresh button</div>}
            {this.props.data && <div>
                <CContainer fluid>
                    
                        <CCard style={{width: '100%'}}>
                            
                                {
                                    this.props.data?.map((item: any, index:any) => (
                                        <CRow key={index}>
                                            <CCol sm={4} >
                                                <div>{item.purchasedDate}</div>
                                                <Link to={{
                                                    pathname: "/resultList",
                                                    state: {chemicalAnalysisIds: item.chemicalAnalysisIds,orderId: item.id }//to get: this.props.location.state.chemicalAnalysisIds
                                                }}>Results</Link>
                                            </CCol>
                                        </CRow>
                                    ))
                                }
                            
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


export default connect(mapStateToProps, mapDispatchToProps)(OrderListPage);
