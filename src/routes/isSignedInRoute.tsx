import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../_helpers';

const IsSignedInRoute = (props: any) => {
  if (!props.isSignedIn) return <Redirect to="/login" />;
  return <Route {...props} />;
};

const mapStateToProps = (state: AppState) => {
  return {
    //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
    isSignedIn: state.authentication.isSignedIn
  };
};

export default connect(mapStateToProps)(IsSignedInRoute)