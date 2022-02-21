import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../_helpers';


const ConfirmRegisterRoute = (props: any) => {
  //we may be redirected here either by login or register pages. on either case, we need the email
  //check isNullOrEMpty... only go to this page if email is provided via authentication or registeration...
  if ((typeof props.userAuthenticationStatus?.email !='undefined' && props.userAuthenticationStatus?.email)
  || (typeof props.userRegisterationStatus?.email !='undefined' && props.userRegisterationStatus?.email))
  return <Route {...props} />;

  return <Redirect to="/" />; 
};

const mapStateToProps = (state: AppState) => {
  return {
    //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
    userAuthenticationStatus: state.authentication,
    userRegisterationStatus: state.registration,
    userConfirmRegistrationStatus: state.confirm_registartion
  };
};

export default connect(mapStateToProps)(ConfirmRegisterRoute)