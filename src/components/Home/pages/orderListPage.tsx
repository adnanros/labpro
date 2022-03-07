import React, { Component } from 'react'
import { CCard, CCol, CContainer, CRow } from '@coreui/react'

// routes config
// import routes from '../../routes/routes'
import { admindataActions } from '../../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../../_helpers';
import { listOrders } from '../../../graphql/queries';
import { Link } from 'react-router-dom';

const queryIdentifier = "OrderList";
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
        this.props.getDataList(queryIdentifier,listOrders,filter,this.props.auth.isSignedIn);
      }
      

      
    render(){
         
        console.log("eee",this.props.data);

        return (
            <div>
            {this.props.isDataLoading && 
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Loading...</span>
            </button>}
            {this.props.isLoadingFailed && <div>a refresh button</div>}
            {this.props.queryIdentifier === queryIdentifier && this.props.data && <div>
                <CContainer fluid>
                    
                        <CCard className='p-4' style={{width: '100%'}}>
                            
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Order Date</th>
                                    <th scope="col">Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.data[0].items.map((item: any, index:any) => (
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{item.purchasedDate}</td>
                                            <td>
                                                <Link to={{
                                                        pathname: "/resultList",
                                                        state: {order: item }//to get: this.props.location.state.chemicalAnalysisIds
                                                    }}>Results
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>  
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
      queryIdentifier: state.package_admin.dataListState.QueryIdentifier
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
  };


export default connect(mapStateToProps, mapDispatchToProps)(OrderListPage);
