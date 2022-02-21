import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import AppHomeContent from "../components/Home/AppHomeContent";
import AppHomeFooter from "../components/Home/AppHomeFooter";
import AppHomeHeader from "../components/Home/AppHomeHeader";
import { AppState } from "../_helpers";

class HomePage extends Component<any,any> {
    render(){
        return (
        <div>
            <AppHomeHeader />
            <AppHomeContent />
            Home
            <AppHomeFooter />
        </div>);
    }
}

function mapState(state: AppState) {
    return {
        auth: state.authentication
    }
}

// const actionCreators = {
    
// }

export default connect(mapState, null)(HomePage);