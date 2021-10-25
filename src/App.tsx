import React  from 'react'
import Amplify, {Auth, Hub} from 'aws-amplify';
import './App.css';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';
import awsconfig from './aws-exports';
import { HubPayload } from '@aws-amplify/core';
import ConfirmSignUp from './components/ConfirmSignUp';
Amplify.configure(awsconfig);


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
      
      return (<SignIn onSignInErrorHandler= {this.onSignInError} />);
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
