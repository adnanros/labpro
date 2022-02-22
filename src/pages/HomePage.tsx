import { Component } from "react";
//import { userActions } from '../_actions';
import { connect } from 'react-redux';
import AppHomeContent from "../components/Home/AppHomeContent";
import AppHomeFooter from "../components/Home/AppHomeFooter";
import AppHomeHeader from "../components/Home/AppHomeHeader";
import { listSampleCategorys } from "../graphql/queries";
import { admindataActions } from "../_actions";
import { AppState } from "../_helpers";

class HomePage extends Component<any,any> {
    constructor(props: any){
        
        super(props);
        this.state = {
        }
      }
  
      componentDidMount(){
        this.props.getDataList(listSampleCategorys);
      }
      
    render(){
        return (
           
        <div>
             {this.props.isDataLoading && <div>loding</div>}
             {this.props.isLoadingFailed && <div>a refresh button</div>}
            {this.props.isLoadedSuccessfully && <div>
                    <AppHomeHeader />
                    <AppHomeContent />
                    <AppHomeFooter />
                </div>}
           
        </div>);
    }
}


const mapStateToProps = (state: AppState) => {
    return {
    auth: state.authentication,
      isDataLoading: state.package_admin.dataListState.isLoadingData,
      isLoadingFailed:state.package_admin.dataListState.isLoadingFailed,
      isLoadedSuccessfully: state.package_admin.dataListState.isLoadedSuccessfully,
      data: state.package_admin.dataListState.data,
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList,
  };


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);