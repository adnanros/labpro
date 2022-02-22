import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CContainer,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CNavLink,
  CNavItem,
  CHeaderToggler,
  CCollapse,
  CNavbar,
  CNavbarToggler,
  CNavbarNav,
} from '@coreui/react'

import {AppHomeHeaderDropdown}  from './header/index'
import { AppState } from '../../_helpers'
import { useSelector } from 'react-redux'


const AppHeader = () => {
  const isSignedIn = useSelector((state: AppState) => state.authentication.isSignedIn);
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" colorScheme="light" className="" style={{backgroundColor: '#e3f2fd'}}>
      <CContainer fluid>
      <CNavbarToggler onClick={() => setVisible(!visible)} />
       <CCollapse className="navbar-collapse" visible={visible}>
        <CNavbarNav className="me-auto mb-2 mb-lg-0">
          <CNavItem>
            <CNavLink to={"/"} component={NavLink} className="active">
              Home
            </CNavLink>
            </CNavItem>
            <CNavItem>

            <CNavLink to="/" component={NavLink} className="active">
              Contact
            </CNavLink>
            </CNavItem>

            <CNavItem>

            <CNavLink to="/" component={NavLink} className="active">
              About
            </CNavLink>

          </CNavItem>
        </CNavbarNav>

        <CNavbarNav className="ms-3">
          {
            isSignedIn && <AppHomeHeaderDropdown />
          }
        </CNavbarNav>

          {
            !isSignedIn && 
            <CNavbarNav className="">
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
            </CNavbarNav>
          }
        </CCollapse>  
      </CContainer>
    </CNavbar>
  )
}

export default AppHeader
