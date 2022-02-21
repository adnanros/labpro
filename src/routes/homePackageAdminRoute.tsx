import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../_helpers';


const HomePackageAdminRoute = (props: any) => {
  if (!props.userAuthenticationStatus.isSignedInUserPackageAdmin) return <Redirect to="/" />;
  return <Route {...props} />;
};

const mapStateToProps = (state: AppState) => {
  return {
    //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
    userAuthenticationStatus: state.authentication
  };
};

export default connect(mapStateToProps)(HomePackageAdminRoute)