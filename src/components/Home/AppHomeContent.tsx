import React from 'react'
import { CCol, CContainer, CRow } from '@coreui/react'

// routes config

const AppHomeContent = React.memo(() => {
  return (
    <CContainer fluid>
        <CRow>
            <CCol lg={8} style={{backgroundColor:'red'}}>
                <img src="" alt="" />
            </CCol>
            <CCol lg={4} style={{backgroundColor:'blue'}}>3</CCol>
        </CRow>
    </CContainer>
    )
});

export default AppHomeContent
