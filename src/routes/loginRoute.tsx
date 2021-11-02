import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../_helpers';

const LoginRoute: React.FC<any> = (props) => (
    <Route {...props.rest} render={() => (
        (!props.userAuthenticationStatus.isSignedIn)
            ? <props.component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

const mapStateToProps = (state: AppState) => {
  return {
    //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
    userAuthenticationStatus: state.authentication
  };
};

export default connect(mapStateToProps)(LoginRoute)