import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  CContainer,
  CNavLink,
  CNavItem,
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
   <div className='bg-white'>
    <CNavbar expand="lg" colorScheme="light" className="bg-white" style={{backgroundColor: ''}}>
      <CContainer fluid>
      <CNavbarToggler onClick={() => setVisible(!visible)} />
       <CCollapse className="navbar-collapse" visible={visible}>
        <CNavbarNav className="me-auto mb-2 mb-lg-0">
          <CNavItem>
            <CNavLink to={"/"} component={NavLink} className="active" style={{color:'#555555',}}>
              Home
            </CNavLink>
            </CNavItem>
            <CNavItem>

            <CNavLink to="/" component={NavLink} className="">
              Contact
            </CNavLink>
            </CNavItem>

            <CNavItem>

            <CNavLink to="/" component={NavLink} className="">
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
    <hr style={{backgroundColor:'#555555'}}/>

  </div> 
  )
}

export default AppHeader
