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
  email: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterPage: React.FC<any> = (props) => {

  const isRegistering = props.isRegistering;
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  
  const onSubmit = (data: IState) => {
    props.register(data.email,data.password);
    console.log(JSON.stringify(data, null, 2));
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
                      <CCol xs={9}><h1>Register</h1></CCol>
                      <CCol xs={3}><Link to={isRegistering ? "#" : "/"}>  <CButton color="link" className="px-0" disabled={isRegistering}>  <h3>Home</h3> </CButton>  </Link>  </CCol>
                  </CRow>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} type="email" placeholder="name@example.com" autoComplete="email" required />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('password')}
                      type="password"
                      placeholder="Password"
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
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="primary" type='submit' disabled={isRegistering}>Create Account</CButton>
                  </div>
                  <Link to={isRegistering ? "#" : "/login"}>
                    <CButton color="link" className="px-0" disabled={isRegistering}>
                            Already have an account? Log in
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
    isRegistering: state.registration.isRegistering
  };
};

const mapDispatchToProps  = {
  register: userActions.register
};

export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage)