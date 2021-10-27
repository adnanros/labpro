// import Amplify, {Auth, Hub} from 'aws-amplify';
// import './App.css';
// import Home from './pages/Home';
// import HomeAdmin from './pages/HomeAdmin';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import Header from './components/Header';
// import awsconfig from './aws-exports';
// import { HubPayload } from '@aws-amplify/core';
// import ConfirmSignUp from './components/ConfirmSignUp';
// import Login from './components/login';




import React, { useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { history } from './_helpers';
import './scss/style.scss'
import { connect, ConnectedProps } from 'react-redux';
import awsconfig from './aws-exports';
import Amplify  from 'aws-amplify';
import { alertActions } from './_actions';

Amplify.configure(awsconfig);
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() =>
  import('./pages')
    .then(({ LoginPage }) => ({ default: LoginPage })),
);

const Register = React.lazy(() =>
import('./pages')
  .then(({ RegisterPage }) => ({ default: RegisterPage })),
);
const Page404 = React.lazy(() => import('./pages/page404'))
const Page500 = React.lazy(() => import('./pages/page500'))



interface IProps {
  message: string,
  type: string
}

//state of redux, is an object containing authentication, registration and alert. see index.tsx of reducer.
const mapStateToProps = (state: any, props: IProps) => {
  return {
    message: state.alert.message,
    type: state.alert.type
  }
};

const mapDispatchToProps  = {
  clearAlerts: alertActions.clear
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsFromRedux & IProps;

const App: React.FC<Props> = (props) => {
     useEffect(() => {
      history.listen((location, action) => {
        // clear alert on location change
        props.clearAlerts();
    });
   }, [props]);
   const alert = props;
 return (
          <div className="jumbotron">
            <div className="container">
              <div className="col-sm-8 col-sm-offset-2">
                  {alert.message &&
                      <div className={`alert ${alert.type}`}>{alert.message}</div>
                  }
                  <HashRouter>
                    <React.Suspense fallback={loading}>
                      <Switch>

                        <Route exact path="/login"  component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/404"  render={(props) => <Page404  />} />
                        <Route exact path="/500"  render={(props) => <Page500  />} />
                        <Route path="/"  render={(props) => <DefaultLayout  />} />
                      </Switch>
                    </React.Suspense>
                  </HashRouter>
              </div>
          </div>
        </div>
    )
}

App.defaultProps = {

}


const connectedApp = connector(App);
export { connectedApp as App };

/*

///export to another file 
export enum SigninStatus {
  loading= 'loading',
  signUp= 'signup',
  signIn= 'signin',
  signOut = 'signout',
  signInAdmin= 'signin_admin',
  doSignIn= 'do_sign_in',
  doSignUp= 'do_sign_up',
  confirmSignUp= 'confirm_sign_up'
};

interface IProps {

}
interface IState {
  signinStatus: SigninStatus, 
  username: string,
}
class App extends React.Component<IProps,IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      signinStatus: SigninStatus.loading,
      username: ''
    }
    //as we will pass this function to childs, 
    //we need to bind them to the App class.
    this.handleClick = this.handleClick.bind(this);
    this.onAuthEvent = this.onAuthEvent.bind(this);
    this.onSignInError = this.onSignInError.bind(this);
    this.onSignUpConfirmStatusChange= this.onSignUpConfirmStatusChange.bind(this);
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);           
      //console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
    });
  }

  onAuthEvent(payload: HubPayload) {
    const event = payload.event.toLowerCase();
    console.log("auth event...",event);
      if(event=== SigninStatus.signOut.toLowerCase()){
        
        this.setState({
          signinStatus: SigninStatus.signOut
        })
      }
      else if(event=== SigninStatus.signIn){
        this.checkAdmin();
      }else if (event === SigninStatus.signUp.toLowerCase()){
        this.setState({
          signinStatus: SigninStatus.confirmSignUp
        })
      } 
  }

  async componentDidMount() {
    try{
      await Auth.currentAuthenticatedUser().then(user=> {
        //console.log(user);
        this.checkAdmin();
      })
    }
    catch(ex){
      // no user is signed in
      this.setState({
        signinStatus: SigninStatus.signUp
      });
    }
  }

  checkAdmin(){// user is signed in now and we want to check wheather user belongs to admin group
    try{
      Auth.currentSession().then(session=> {
        let idToken = session.getIdToken();
        let groups = idToken.payload['cognito:groups'];
        if(groups!= null && Array.isArray(groups)){
          // let cg = idToken.payload['cognito:groups'] as string[];
          if(groups.includes('PackagesAdmin')){
            this.setState({
              signinStatus: SigninStatus.signInAdmin
            });
          } else {
            this.setState({
              signinStatus: SigninStatus.signIn
            });
          }
        }else{
          // console.log("xxxxxx",cg);
          this.setState({
            signinStatus: SigninStatus.signIn
          });
        }
      })
    }
    catch(ex){
      this.setState({
        signinStatus: SigninStatus.signUp
      });
    }
  }

onSignInError(error: string, username: string){
  if(error === 'UserNotConfirmedException'){
    this.setState({
      signinStatus: SigninStatus.confirmSignUp,
      username: username
    });
  }
}

onSignUpConfirmStatusChange(status:string){
  if(status === 'success'){
    this.setState({
      signinStatus: SigninStatus.doSignIn
    });
  }
}


  render(){
    
    if(this.state.signinStatus === SigninStatus.doSignIn){
      return(<Login/>);
      //return (<SignIn onSignInErrorHandler= {this.onSignInError} />);
    }
    if (this.state.signinStatus === SigninStatus.doSignUp){
      return (<SignUp />);
    }
    if(this.state.signinStatus === SigninStatus.confirmSignUp){
      return (<ConfirmSignUp username= {this.state.username} confirmStatusHandler={this.onSignUpConfirmStatusChange} />);
    }
    return(<div>
      {
        this.getHeader()
      }
      {
      this.getHome()
      }
    </div>);
    
  }
  
  handleClick(val: SigninStatus) {
    this.setState({
      signinStatus: val
    })
  }

  getHeader(){
    return(<Header signinStatus={this.state.signinStatus} handleClick =  {this.handleClick} />);
  }

  getHome(){
    switch(this.state.signinStatus){
      case SigninStatus.loading: 
        return (<div>loading</div>);
      case SigninStatus.signIn: 
        return (<Home />);
      case SigninStatus.signUp:
        return (<Home />);
      case SigninStatus.signOut:
        return (<Home />);
      case SigninStatus.signInAdmin:
        return (<HomeAdmin />);
    }
  }
}


export default App;
*/