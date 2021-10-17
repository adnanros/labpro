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
};

interface IProps {

}
interface IState {
  signinStatus: SigninStatus
}
class App extends React.Component<IProps,IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      signinStatus: SigninStatus.loading
    }
    //as we will pass this function to childs, 
    //we need to bind them to the App class.
    this.handleClick = this.handleClick.bind(this);
    this.onAuthEvent = this.onAuthEvent.bind(this);
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);           
      //console.log('A new auth event has happened: ', data.payload.data.username + ' has ' + data.payload.event);
    });
  }

  onAuthEvent(payload: HubPayload) {
    const event = payload.event.toLowerCase();
    //console.log("auth event...",event);
      if(event=== SigninStatus.signOut.toLowerCase()){
        
        this.setState({
          signinStatus: SigninStatus.signOut
        })
      }
      else if(event=== SigninStatus.signIn){
        this.checkAdmin();
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

  checkAdmin(){
    try{
      Auth.currentSession().then(session=> {
        let idToken = session.getIdToken();
        let cg = idToken.payload['cognito:groups'] as string[];
        
        console.log("xxxxxx",cg);
        this.setState({
          signinStatus: SigninStatus.signInAdmin
        });
      })
    }
    catch(ex){
      this.setState({
        signinStatus: SigninStatus.signUp
      });
    }
  }
  render(){
    
    if(this.state.signinStatus === SigninStatus.doSignIn){
      const routeComponentPropsMock = {
        history: {} as any,
        location: {} as any,
        match: {} as any,
      }
      return (<SignIn {...routeComponentPropsMock} />);
    }
    if (this.state.signinStatus === SigninStatus.doSignUp){
      return (<SignUp />);
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
