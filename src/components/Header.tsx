import React from "react";
import {Auth} from 'aws-amplify'
///export and import internal type 
import {SigninStatus} from '../App';

type HeaderProps = {
    signinStatus: SigninStatus;
    handleClick: (val: SigninStatus)=> void;
}

export default class Header extends React.Component<HeaderProps> {
    

    render() {
        if(this.props.signinStatus === SigninStatus.signIn || this.props.signinStatus === SigninStatus.signInAdmin)
        {
            return (<div>Header <button onClick={()=>{this.signOut()}}>sign-out</button></div>);

        }

        if(this.props.signinStatus === SigninStatus.signOut || this.props.signinStatus === SigninStatus.signUp)
        {
            return (<div>
                    <div>sign in <button onClick={()=>{this.props.handleClick(SigninStatus.doSignIn)}}>sign-in</button></div>
                    <div>Header <button onClick={()=>{this.props.handleClick(SigninStatus.doSignUp)}}>sign-up</button></div>
            </div>);

        }

        return(<div>Header</div>);
    }

    async signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
}

