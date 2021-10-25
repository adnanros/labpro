import React from 'react';
import {Auth} from 'aws-amplify';
import { Formik, Field, Form, ErrorMessage } from "formik";


type Props = {
    username: string,
    confirmStatusHandler: (status: string)=> void;
};

type State = {
  username: string,
  code: string,
  successful: boolean,
  message: string
};

export default class confirmSignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.sendConfirmationCode = this.sendConfirmationCode.bind(this);
    this.resendConfirmationCode = this.resendConfirmationCode.bind(this);

    this.state = {
      username: this.props.username,
      code: "",
      successful: false,
      message: ""
    };
  }

  //send the code which emailed to user email address
  async sendConfirmationCode(formValue: { username: string, code: string; }) {
    const { username, code } = formValue;

    this.setState({
      message: "",
      successful: false
    });

    try {
      console.log('enter');
        await Auth.confirmSignUp(username, code);
        this.props.confirmStatusHandler("success");
      } catch (error) {
          console.log('error confirming sign up', error);
          this.setState({
            message: "confirmation failed",
            successful: false
          });
      }

  }

  async resendConfirmationCode(formValue: { username: string }) {
    const { username } = formValue;

    this.setState({
      message: "",
      successful: false
    });

    try {
        await Auth.resendSignUp(username);
      } catch (error) {
          console.log('error confirming sign up', error);
      }

  }



  render() {
    const { successful, message } = this.state;

    const initialValues = {
      username: this.props.username,
      code: "",
    };

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Formik
            initialValues={initialValues}
            onSubmit={this.sendConfirmationCode}
          >
            <Form>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Field name="username" type="text" className="form-control" value={this.props.username}/>
                    <ErrorMessage
                        name="username"
                        component="div"
                        className="alert alert-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="code"> Confirmation Code </label>
                    <Field name="code" type="text" className="form-control" />
                    <ErrorMessage
                      name="code"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <button type='submit' className="btn btn-primary btn-block" >Confirm</button>
                  </div>
                  <div className="form-group">
                    <button type='button' className="btn btn-primary btn-block" onClick={()=> this.resendConfirmationCode}>Resend Confirmation Code</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

