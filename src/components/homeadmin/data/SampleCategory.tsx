import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { listSampleCategorys } from '../../../graphql/queries';
import React from 'react';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';

interface IState {
  showModal: boolean
}

class SampleCategory extends Component<any,IState> {

  constructor(props: any){
    super(props);
    this.state= {
      showModal: false
    }
  }
    componentDidMount(){
      this.props.getDataList(listSampleCategorys);
    }
    render() {
      if(!this.props.isDataLoading){
        console.log('xxx',this.props.data);
        
      }
      
      return (
        <div>
              <React.Fragment>
              {this.props.data &&
                this.props.data.map((item: any, index:any) => (<div key={index}>
                  **************************** {item.id}
                  <button onClick={()=>{this.setState({showModal: true})}}>toModal</button>
                </div>))}
            </React.Fragment>
            <CModal
              className="show d-block position-static"
              backdrop={false}
              keyboard={false}
              portal={false}
              visible= {this.state.showModal}
            >
              <CModalHeader>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>Modal body text goes here.</CModalBody>
              <CModalFooter>
                <CButton onClick={()=>{this.setState({showModal: false})}} color="secondary">Close</CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>

        </div>
      );
    }
  };


  const mapStateToProps = (state: AppState) => {
    return {
      isDataLoading: state.package_admin.isLoadingData,
      data: state.package_admin.data?.data?.listSampleCategorys.items as Array<any>
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SampleCategory)