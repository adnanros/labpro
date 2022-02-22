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
import { cilUser } from '@coreui/icons'
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { AppState } from '../_helpers'

interface IState {
  email: string
}
const ForgotPasswordPage: React.FC<any> = (props) => {
  const isSendingforgotPassCode = props.isSendingReset;
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  });
  
  const onSubmit = (data: IState) => {
    props.forgotPassword(data.email);
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors }
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
                  
                  <CRow>
                      <CCol xs={9}><h1>Password Recovery</h1></CCol>
                      <CCol xs={3}><Link to={isSendingforgotPassCode ? "#" : "/"}>  <CButton color="link" className="px-0" disabled={isSendingforgotPassCode}>  <h3>Home</h3> </CButton>  </Link>  </CCol>
                  </CRow>
                  <p className="text-medium-emphasis">Enter your email</p>
                  <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} type="email" placeholder="name@example.com" autoComplete="email" required />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type='submit' disabled={isSendingforgotPassCode}>Send Recovery Code</CButton>
                  </div>
                  <div>
                    <Link to={isSendingforgotPassCode ? "#": "/login"}>
                      <CButton color="link" className="px-0" disabled={isSendingforgotPassCode}>
                              Already have an account? Log in
                      </CButton>
                    </Link>
                  </div>
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
    isSendingReset: state.reset_password.isSending,
  };
};

const mapDispatchToProps  = {
  forgotPassword: userActions.forgotPassword
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordPage);