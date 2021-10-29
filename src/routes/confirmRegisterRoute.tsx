import React from 'react'
import { Route, Redirect,RouteProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'

interface IProps {
    component:any;
    rest?:any
  }
  
  const mapStateToProps = (state: any) => {
    return {
      //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
      userAuthenticationStatus: state.authentication,
      userRegisterationStatus: state.registeration,
      userConfirmRegistrationStatus: state.confirm_registartion
    };
  };
  
  
  const connector = connect(mapStateToProps);
  type PropsFromRedux = ConnectedProps<typeof connector>;
  type Props = PropsFromRedux & IProps & RouteProps;

const ConfirmRegisterR: React.FC<Props> = (props) => (
    <Route {...props.rest} render={() => (
        //we may be redirected here either by login or register pages. on either case, we need the email
        //check isNullOrEMpty... only go to this page if email is provided via authentication or registeration...
        ((typeof props.userAuthenticationStatus?.email !='undefined' && props.userAuthenticationStatus?.email)
         || (typeof props.userRegisterationStatus?.email !='undefined' && props.userRegisterationStatus?.email))
            ? <props.component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

const connectedConfirmRegisterRoute = connector(ConfirmRegisterR);
export { connectedConfirmRegisterRoute as ConfirmRegisterRoute };