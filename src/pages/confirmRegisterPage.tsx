import React from 'react'
import * as Yup from 'yup'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { AppState } from '../_helpers'

interface IState {
  code: string
}
const ConfirmRegisterPage: React.FC<any> = (props) => {

  const isConfirming = props.isConfirming;
  const validationSchema = Yup.object().shape({
    code: Yup.string()
      .required('Code is required')
  });
  
  const onSubmit = (data: IState) => {
    props.confirmRegister(props.email,data.code);
    console.log('xxxx',data.code);
  };
  
  const {
    register,
    handleSubmit
  } = useForm<IState>({
    resolver: yupResolver(validationSchema)
  });
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                  <h1>Confirm Registration</h1>
                  <p className="text-medium-emphasis">Enter the code we sent to {props.email}</p>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('code')}
                      
                      placeholder="registration code"
                      autoComplete="code"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type='submit' disabled={isConfirming}>Confirm Registration</CButton>
                  </div>
                  <CButton color='primary'  variant="ghost"  disabled={isConfirming} onClick={()=> props.resendConfirmationCode(props.email)} >resend code</CButton>
                  <Link to="/login">
                    <CButton color="link" className="px-0" disabled={isConfirming}>
                            Already have a confirmed account? Log in
                    </CButton>
                  </Link>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
    isConfirming: state.confirm_registartion.isConfirming,
    //we are here either from login page or from register page.
    email: (typeof state.authentication.email !='undefined' && state.authentication?.email) ? state.authentication.email : state.registration.email
  };
};

const mapDispatchToProps  = {
  confirmRegister: userActions.confirmRegister,
  resendConfirmationCode: userActions.resendConfirmationCode
};

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmRegisterPage);
