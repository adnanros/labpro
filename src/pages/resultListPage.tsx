import React, { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { AppState } from "../_helpers";

class ResultListPage extends Component<any,any> {
    render(){
        return (
        <div>
            result List
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

export default connect(mapState, null)(ResultListPage);
