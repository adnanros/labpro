import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'

// routes config
import routes from '../../routes/routes'
import SampleCategoryCard from './subcomponents/SampleCategoryCard';

const AppHomeContent = React.memo(() => {
  return (
    <CContainer fluid>
        <CRow>
            <CCol lg={8} style={{backgroundColor:'red'}}>
                <img src="" alt="" />
            </CCol>
            <CCol lg={4} style={{backgroundColor:'blue'}}>3</CCol>
        </CRow>
        <CRow sm={{ cols: 2 }}>
            <CCol>
                <SampleCategoryCard />
            </CCol>
            <CCol >
                <SampleCategoryCard />
            </CCol>
            <CCol >
                <SampleCategoryCard />
            </CCol>
            <CCol >
                <SampleCategoryCard />
            </CCol>
        </CRow>
    </CContainer>
    )
});

export default AppHomeContent
