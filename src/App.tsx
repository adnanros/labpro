
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
import OrderRegisterationPage from './pages/OrderRegisterationPage'
import confirmRegisterPage from './pages/confirmRegisterPage'

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
  }

  componentDidMount() {

    this.props.fetchAuthStatus();
  }
  
  render() {

    return(
     
            <div>
              {
              this.props.message &&
                  <div className={`alert ${this.props.type}`}>{this.props.message}</div>
              }
              {
                this.props.isLoadingAuthStatus && loading
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
                      <ConfirmRegisterRoute exact path="/confirmRegister" component={confirmRegisterPage} />
                      <Route exact path="/404"  render={(props) => <Page404  />} />
                      <Route exact path="/500"  render={(props) => <Page500  />} />
                      <HomePackageAdminRoute path="/homeAdmin" render={(props: any) => <HomeAdmin {...props} />}  />
                      <IsSignedInRoute exact path="/orderRegisteration" component={OrderRegisterationPage} />
                      <IsSignedInRoute exact path="/resulList" component={ResultListPage} />
                      {/* bASE rOUTE should be last one! */}
                      <HomeRoute name="Home" path="/" component={HomePage} />
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
