import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { listSampleCategorys,  } from '../../../graphql/queries';
import React from 'react';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import { deleteSampleCategory } from '../../../graphql/mutations';

// in class component we cannot use useState functionality

interface IState {
  showDetail: boolean,
  showEdit: boolean,
  showDeleteAlert: boolean,
  toBeDeletedId: string
}
class SampleCategory extends Component<any,IState> {
  
    constructor(props: any){
      super(props);
      this.state = {
        showDetail: false,
        showEdit: false,
        showDeleteAlert: false,
        toBeDeletedId: ''
      }
    }
    componentDidMount(){
      this.props.getDataList(listSampleCategorys);

    }
    render() {
    
      return (
        <div>
              <React.Fragment>
              {this.props.data &&
                this.props.data.map((item: any, index:any) => (
                  <div key={index}>
                    <div>
                    **************************** {item.name}
                    </div>
                    <div>
                      <button onClick={()=>{this.setState({showDetail: true})}} disabled={this.props.isDeletingItem}>Edit</button>
                      <button onClick={()=>{this.setState({showEdit: true})}} disabled={this.props.isDeletingItem}>Detail</button>
                      <button onClick={()=>{this.setState({toBeDeletedId: item.id, showDeleteAlert: true})}} disabled={this.props.isDeletingItem}>Delete</button>
                    </div>
                  </div>)
                )}
            </React.Fragment>
            <CModal
              className="show d-block position-static"
              backdrop={false}
              keyboard={false}
              portal={false}
              visible= {this.state.showDeleteAlert}
            >
              <CModalHeader>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>Modal body text goes here.</CModalBody>
              <CModalFooter>
                <CButton onClick={()=>{this.setState({showDeleteAlert: false})}} color="secondary">Close</CButton>
                <CButton onClick={()=>{this.props.deleteItem(deleteSampleCategory,this.state.toBeDeletedId,listSampleCategorys)}} color="primary">Ok</CButton>
              </CModalFooter>
            </CModal>

        </div>
      );
    }
  };


  const mapStateToProps = (state: AppState) => {
    return {
      isDataLoading: state.package_admin.isLoadingData,
      data: state.package_admin.data?.data?.listSampleCategorys.items as Array<any>,

      isDeletingItem: state.package_admin.isDeletingItem,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
    deleteItem: admindataActions.deleteItem,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SampleCategory)