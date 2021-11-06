import { connect } from 'react-redux';
import { Component } from "react"
import { AppState } from '../../../_helpers';
import { admindataActions} from '../../../_actions';
import { listSampleCategorys } from '../../../graphql/queries';

class SampleCategory extends Component<any,any> {

    componentDidMount(){
      this.props.getDataList(listSampleCategorys);
    }
    render() {
      return (
        <div>
          SampleCategory
        </div>
      );
    }
  };


  const mapStateToProps = (state: AppState) => {
    return {
      isDataLoading: state.package_admin.isLoadingData,
      data: state.package_admin.data
    }
  };
  
  const mapDispatchToProps  = {
    getDataList: admindataActions.getDataList
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SampleCategory)