import { Component } from 'react'
import { CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CRow } from '@coreui/react'

// routes config
import SampleCategoryCard from './subcomponents/SampleCategoryCard';
import { admindataActions } from '../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../_helpers';
import { listSampleCategorys } from '../../graphql/queries';

class AppHomeContent extends Component<any,any> {
    constructor(props: any){
        console.log("Hi from AppHomeContent");
        super(props);
        this.state = {
        }
      }
  
    componentDidMount(){
      this.props.getDataList(listSampleCategorys,null,this.props.auth.isSignedIn);
    }
      
    render(){
        return (
            <CContainer fluid>
            <CCard className="mb-3"  style={{width: '100%'}}>
                <CRow className="g-0">
                    <CCol md={8}>
                    <img alt='main' width={'100%'} height={'100%'} src={require('../../Assets/images/mainImage.jpg').default} />
                    </CCol>
                    <CCol md={4}>
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText>
                        This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.
                        </CCardText>
                        <CCardText>
                        <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                        </CCardText>
                    </CCardBody>
                    </CCol>
                </CRow>
                </CCard>
                <CCard style={{width: '100%'}}>
                    <CRow>
                        {
                            this.props.data &&
                            this.props.data.map((item: any, index:any) => (
                                <CCol sm={4} key={index}>
                                <SampleCategoryCard name={item.name} description={item.description} imageName={'sampleCat1.jpg'} sampleCategoryId={item.id} />
                                </CCol>
                            ))
                         }
                    </CRow>
                </CCard>
        </CContainer>
        );
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
  

export default connect(mapStateToProps, mapDispatchToProps)(AppHomeContent);
