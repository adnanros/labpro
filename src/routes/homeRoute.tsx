import React from 'react'
import { Route, Redirect,RouteProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'

 interface IProps {
    component:any;
    rest?:any,
  }
  
  
  const mapStateToProps = (state: any, props: IProps) => {
    return {
      //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
      userAuthenticationStatus: state.authentication
    };
  };
  
  
  const connector = connect(mapStateToProps);
  type PropsFromRedux = ConnectedProps<typeof connector>;
  type Props = PropsFromRedux & IProps & RouteProps;

const HomeR: React.FC<Props> = (props) => (
    <Route {...props.rest} render={() => (
        (!props.userAuthenticationStatus.isSignedInUserPackageAdmin)
            ? <props.component {...props} />
            : <Redirect to={{ pathname: '/homeAdmin', state: { from: props.location } }} />
    )} />
)
const connectedHomeRoute = connector(HomeR);
export { connectedHomeRoute as HomeRoute };