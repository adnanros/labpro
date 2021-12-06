import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CNavLink,
  CNavItem,
} from '@coreui/react'

import {AppHeaderDropdown}  from './header/index'
import { AppState } from '../../_helpers'
import { useSelector } from 'react-redux'


const AppHeader = () => {
  const isSignedIn = useSelector((state: AppState) => state.authentication.isSignedIn);
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} className="active">
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav className="ms-3">
          {
            isSignedIn && <AppHeaderDropdown />
          }
        </CHeaderNav>

          {
            !isSignedIn && 
            <CHeaderNav className="">
              <CNavItem>
                <CNavLink to="/login" component={NavLink} className="active">
                  Login
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink to="/register" component={NavLink} className="active">
                  Register
                </CNavLink>
              </CNavItem>
            </CHeaderNav>
          }
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  )
}

export default AppHeader
