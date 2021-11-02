import React from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/homeadmin/index';

export default class HomeAdminPage extends React.Component {
    render(){
        return (
            <div className='d-flex'>
            {/* <AppSidebar /> */}
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

function mapState(state: any) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
}

const connectedHomeAdminPage = connect(mapState, actionCreators)(HomeAdminPage);
export { connectedHomeAdminPage as HomeAdminPage };