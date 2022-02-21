import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CCol, CContainer, CRow, CSpinner } from '@coreui/react'

// routes config
import routes from '../../routes/routes'

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
