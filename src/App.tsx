import React from 'react'
import {Auth, Hub} from 'aws-amplify';
import './App.css';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Header from './components/Header';

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
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    try{
      await Auth.currentAuthenticatedUser().then(user=> {
        console.log(user);
        this.checkAdmin();
      })
    }
    catch(ex){
      // no user is signed in
      this.setState({
        signinStatus: SigninStatus.signUp
      });
    }

  Hub.listen('auth',(data)=> {
    const event = data.payload.event;
    if(event=== SigninStatus.signOut){
      this.setState({
        signinStatus: SigninStatus.signOut
      })
    }
    else if(event=== SigninStatus.signIn){
      this.checkAdmin();
    } 
  });
  }

  checkAdmin(){
    try{
      Auth.currentSession().then(session=> {
        let idToken = session.getIdToken();
        let jwt = idToken.getJwtToken();
        console.log(jwt);
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
      return (<SignIn />);
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
