import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { AppState } from '../_helpers';
import { Link } from 'react-router-dom';

interface IState {
  code: string;
  password: string;
  passwordConfirmation: string;
}

const ResetPasswordPage: React.FC<any> = (props) => {
  //console.log('rendered with props:',props);
  const isReseting: boolean  = props.isResetting;
  const email: String = props.location.state.email;
  const validationSchema = Yup.object().shape({
    code: Yup.string()
        .required('Code is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  
  const onSubmit = (data: IState) => {
    props.resetPassword(email,data.code,data.password)
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
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
                    <CRow>
                        <CCol xs={9}><h1>Reset Password</h1></CCol>
                        <CCol xs={3}><Link to={isReseting ? "#" : "/"}>  <CButton color="link" className="px-0" disabled={isReseting}>  <h3>Home</h3> </CButton>  </Link>  </CCol>
                    </CRow>
                    <p className="text-medium-emphasis">Enter the confirmation Code we sent to {email}</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput className={`form-control ${errors.code ? 'is-invalid' : ''}`} {...register('code')} type="code" placeholder="the code we sent to your email" required />
                      <div className="invalid-feedback">{errors.code?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('password')}
                      type="password"
                      placeholder="New Password"
                      autoComplete="new-password"
                      required
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('passwordConfirmation')}
                      type="password"
                      placeholder="Repeat New Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                    <CRow>
                      <CCol xs={9}>
                        <CButton color="primary" className="px-4" type='submit' disabled={isReseting}>
                          Reset Password
                        </CButton>
                      </CCol>
                      <CCol xs={3}>
                      <CButton color='primary'  variant="ghost"  disabled={isReseting} onClick={()=> props.forgotPassword(email)} >resend code</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    isResetting: state.reset_password.isSending
  };
};

const mapDispatchToProps  = {
  resetPassword: userActions.resetPassword,
  forgotPassword: userActions.forgotPassword
};

export default connect(mapStateToProps,mapDispatchToProps)(ResetPasswordPage);