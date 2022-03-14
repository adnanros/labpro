
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
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
import { cilLockLocked, cilUser } from '@coreui/icons'
import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { AppState } from '../_helpers';
import google_btn from '../Assets/images/google_signin_button.png';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib-esm/types/Auth';

interface IState {
  email: string;
  password: string;
}

const LoginPage: React.FC<any> = (props) => {
  //console.log('rendered with props:',props);
  const  loggingIn: boolean  = props.isLoggingIn;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters')
  });
  
  const onSubmit = (data: IState) => {
   
    props.login(data.email,data.password);
    //console.log(JSON.stringify(data, null, 2));
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
                      <CCol xs={9}><h1>Login</h1></CCol>
                      <CCol xs={3}><Link to={loggingIn ? "#" : "/"}>  <CButton color="link" className="px-0" disabled={loggingIn}>  <h3>Home</h3> </CButton>  </Link>  </CCol>
                    </CRow>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} type="email" placeholder="name@example.com" autoComplete="email" required />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        {...register('password')}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        required
                      />
                      <div className="invalid-feedback">{errors.password?.message}</div>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type='submit' disabled={loggingIn}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to={loggingIn ? "#" : "/forgotPassword"} >
                          <CButton color="link" className="px-0" disabled={loggingIn}>
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                  <CButton color="link" className="px-0" disabled={loggingIn} onClick={()=> props.federatedLogin(CognitoHostedUIIdentityProvider.Google)}>
                    <img src={google_btn} alt="Google Sign In button"
                          className="googleSignIn"
                          style={{height:"45px", width:"190px"}}/>
                  </CButton>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      If you don't have an account,you can register an account in registeration page.
                    </p>
                    <Link to={loggingIn ? "#" : "/register"} >
                      <CButton color="primary" className="mt-3" disabled = {loggingIn} active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
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
    //we have 3 fields in redux state. authentication, registration and alert. see index.tsx of reducers.
    isLoggingIn: state.authentication.isLoggingIn
  };
};

const mapDispatchToProps  = {
  login: userActions.login,
  federatedLogin: userActions.federationLogin
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);