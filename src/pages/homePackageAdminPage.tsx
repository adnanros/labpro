import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/homeadmin/index';
import { AppState } from "../_helpers";

class HomePackageAdminPage extends Component<any,any> {

    render(){
        return (
          <div className=''>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
              <AppHeader />
              <div className="body flex-grow-1 px-3">
                <AppContent />
              </div>
              <AppFooter />
            </div>
          </div>
          );
    }
}

function mapState(state: AppState) {
  return {
    auth: state.authentication
  }
}

const actionCreators = {

}

export default connect(mapState, actionCreators)(HomePackageAdminPage);
