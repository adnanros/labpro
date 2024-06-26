import React from 'react'
import {
  //CAvatar,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { userActions } from '../../../_actions';
import { useSelector,connect } from 'react-redux';
import { AppState } from '../../../_helpers/store';


//import avatar8 from './../../assets/images/avatars/9.jpg'
const mapDispatchToProps  = {
  logout: userActions.logout
};

const AppHeaderDropdown = (props: any) => {
  const email = useSelector((state: AppState) => state.authentication.email);
  const isLogingOut = useSelector((state: AppState) => state.authentication.isLogingout);

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle  className="py-0" caret={true}>
        {/* <CAvatar src={avatar8} size="md" /> */}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{email}</CDropdownHeader>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CButton onClick={()=>{props.logout()}} disabled= {isLogingOut}>Logout</CButton>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default connect(null,mapDispatchToProps)(AppHeaderDropdown);
