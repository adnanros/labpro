import React from 'react'
import { CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CRow } from '@coreui/react'

// routes config
import routes from '../../routes/routes'
import SampleCategoryCard from './subcomponents/SampleCategoryCard';
import { admindataActions } from '../../_actions';
import { connect } from 'react-redux';
import { AppState } from '../../_helpers';

const AppHomeContent = React.memo((props:any) => {
  return (
    <CContainer fluid>
        <CCard className="mb-3"  style={{width: '100%'}}>
            <CRow className="g-0">
                <CCol md={8}>
                <img width={'100%'} height={'100%'} src={require('../../Assets/images/mainImage.jpg').default} />
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
                        props.data &&
                        props.data.map((item: any, index:any) => (
                            <CCol sm={4} key={index}>
                            <SampleCategoryCard name={item.name} description={item.description} imageName={'sampleCat1.jpg'} sampleCategoryId={item.id} />
                            </CCol>
                        ))
                     }
                </CRow>
            </CCard>
    </CContainer>
    )
});


const mapStateToProps = (state: AppState) => {
    return {
      auth: state.authentication,
      data: state.package_admin.dataListState.data,
    }
  };
  

export default connect(mapStateToProps, null)(AppHomeContent);
