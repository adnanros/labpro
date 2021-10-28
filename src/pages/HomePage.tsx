import React from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';

export default class HomePage extends React.Component {
    render(){
        return (<div>Home</div>);
    }
}

function mapState(state: any) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };