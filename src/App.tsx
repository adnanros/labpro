
import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom';
import { AppState, history } from './_helpers'
import './scss/style.scss'
import { connect } from 'react-redux'
import awsconfig from './aws-exports'
import Amplify  from 'aws-amplify'
import { alertActions, userActions } from './_actions'
import HomePage from './pages/HomePage'
import { HomeRoute,ConfirmRegisterRoute, HomePackageAdminRoute,LoginRoute, IsSignedInRoute } from './routes'//
import ResultListPage from './pages/resultListPage'
import  OrderRegisterationPage from './components/Home/pages/OrderRegisterationPage'
import ConfirmRegisterPage from './pages/confirmRegisterPage'
import UnknownRoute from './routes/unknownRoute';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import ResetPasswordPage from './pages/resetPasswordPage';

Amplify.configure(awsconfig);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

//we load this pages only once and use render= (instead of component=)
const Login = React.lazy(() => import('./pages/loginPage'))
const Register = React.lazy(() => import('./pages/registerPage'))
const HomeAdmin = React.lazy(() => import('./pages/homePackageAdminPage'))
const Page404 = React.lazy(() => import('./pages/page404'))
const Page500 = React.lazy(() => import('./pages/page500'))

class App extends Component<any,any> {
  constructor(props: any){
    super(props);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
    this.state = {
      isMounted: false
    }
    //console.log("Constructor");
  }

  componentDidMount() {
    //console.log("did mount")
    this.props.fetchAuthStatus();
    this.setState({isMounted: true})
  }
  
  render() {
    //console.log("Hello");
    
    if(!this.state.isMounted) return loading

    return(
            <div>
              {
              this.props.message &&
                  <div className={`alert ${this.props.type}`}>{this.props.message}</div>
              }
              {
                 this.props.isLoadingAuthStatus && 
                <div style={{width:100,height:100,backgroundColor:'red'}}> </div>
              }
              {
                !this.props.isLoadingAuthStatus &&
                <div>
                  <Router  history={history}>
                  <React.Suspense fallback={loading}>
                    <Switch>
                      {/* when use component = ..., the component will be recreated. when using render = ..., the component is created only once. */}
                      <LoginRoute exact path="/login"   render={(props: any) => <Login {...props} />} />
                      <LoginRoute exact path="/register" render={(props: any) => <Register {...props} />} />
                      <LoginRoute exact path="/forgotPassword" component={ForgotPasswordPage} />
                      <LoginRoute exact path="/resetPassword" component={(props: any) => <ResetPasswordPage {...props} />} />
                      <ConfirmRegisterRoute exact path="/confirmRegister" component={ConfirmRegisterPage} />
                      <IsSignedInRoute exact path="/orderRegisteration" component={(props: any) => <OrderRegisterationPage {...props} />} />
                      <IsSignedInRoute exact path="/resulList" component={(props: any) => <ResultListPage {...props} />} />
                      {/* Order is important.*/}
                      <HomePackageAdminRoute path="/homeAdmin" render={(props: any) => <HomeAdmin {...props} />}  />
                      <HomeRoute name="Home" path="/" render={(props: any) => <HomePage {...props} />} />
                      
                      <Route exact path="/404"  render={(props: any) => <Page404 {...props} />} />
                      <Route exact path="/500"  render={(props: any) => <Page500 {...props} />} />
                      {/* Order is important. this one should be the last one. unknown routes will be redirected to 404 page. */}
                      <UnknownRoute path='*' exact={true} />
                    </Switch>
                  </React.Suspense>
                  </Router >
                </div>
              }
     </div>
)
}
}

//state of redux, is an object containing authentication, registration and alert. see index.tsx of reducer.
const mapStateToProps = (state: AppState) => {
  return {
    message: state.alert.message,
    type: state.alert.type,
    isLoadingAuthStatus: state.authentication.isLoadingAuthState
  }
};

const mapDispatchToProps  = {
  clearAlerts: alertActions.clear,
  fetchAuthStatus: userActions.fetchAthStatus
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
