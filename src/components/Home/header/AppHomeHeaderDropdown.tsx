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
import { Link } from 'react-router-dom';


//import avatar8 from './../../assets/images/avatars/9.jpg'
const mapDispatchToProps  = {
  logout: userActions.logout
};

const AppHomeHeaderDropdown = (props: any) => {
  const email = useSelector((state: AppState) => state.authentication.email);
  const isLogingOut = useSelector((state: AppState) => state.authentication.isLogingout);
  const isSignedIn = useSelector((state: AppState) => state.authentication.isSignedIn);


  return (

    <CDropdown variant="nav-item">
      <CDropdownToggle  className="py-0" caret={true}>
        {/* <CAvatar src={avatar8} size="md" /> */}
      </CDropdownToggle>
      {isSignedIn &&
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{email}</CDropdownHeader>
          <CDropdownItem>
          <Link to="/orderRegisteration">
                Order an Experiment
            </Link>
          </CDropdownItem>
          <CDropdownItem>
            <Link to="/resulList">
                Resuls
            </Link>
          </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CButton onClick={()=>{props.logout()}} disabled= {isLogingOut}>Logout</CButton>
        </CDropdownItem>
      </CDropdownMenu>
      }
      {!isSignedIn &&
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
        
        </CDropdownHeader>
        <CDropdownItem>
          <Link to="/register">
              Register Now!
          </Link>
        </CDropdownItem>
        <CDropdownItem>
          <Link to="/login">
              login
          </Link>
        </CDropdownItem>
      </CDropdownMenu>
      }
    </CDropdown>
  )
}

export default connect(null,mapDispatchToProps)(AppHomeHeaderDropdown);
