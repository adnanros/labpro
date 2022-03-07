import React from 'react'
import {
  CAvatar,
  //CAvatar,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLink,
} from '@coreui/react'
import { userActions } from '../../../_actions';
import { useSelector,connect } from 'react-redux';
import { AppState } from '../../../_helpers/store';


import avatar8 from './../../../images/avatar.png'
import { Link } from 'react-router-dom';
const mapDispatchToProps  = {
  logout: userActions.logout
};

const AppHomeHeaderDropdown = (props: any) => {
  const email = useSelector((state: AppState) => state.authentication.email);
  const isLogingOut = useSelector((state: AppState) => state.authentication.isLogingout);

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle  className="py-0" caret={true}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-4">{email}</CDropdownHeader>
        
          <CLink href='/orderList'
          className="p-2 d-block mb-0" style={{width: '100%', height: '100%', textDecoration:'none', color:'#333'}}
          onMouseEnter={(e: any)=>{
            e.target.style.backgroundColor='#aaa';
            e.target.style.color= 'white';
          }}
          onMouseLeave={(e: any)=>{
            e.target.style.backgroundColor='white';
            e.target.style.color= '#333';
          }}>
                  Orders
          </CLink>
        <CDropdownDivider style={{marginTop:'0'}}/>
        <div>
          <CButton onClick={()=>{props.logout()}} disabled= {isLogingOut}
            className="mx-auto " style={{width:100, display:'block'}}>Logout</CButton>
        </div>
          
      </CDropdownMenu>
    </CDropdown>
  )
}

export default connect(null,mapDispatchToProps)(AppHomeHeaderDropdown);
