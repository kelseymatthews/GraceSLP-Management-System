import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
// import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
// import Auth0 from '../../helpers/auth0';
// import Firebase from '../../helpers/firebase';
// import FirebaseLogin from '../../components/firebase';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import axios from 'axios';

const { login } = authAction;

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };
  // componentWillReceiveProps(nextProps) {
  //   if (
  //     this.props.isLoggedIn !== nextProps.isLoggedIn &&
  //     nextProps.isLoggedIn === true
  //   ) {
  //     this.setState({ redirectToReferrer: true });
  //   }
  // }

  handleLogin = () => {
    if (this.state.username === "" || this.state.password === "") {
      alert("Enter user information!")
    }
    else {
      axios.get('http://localhost:5000/api/employees/username/' + this.state.username)
      .then(response => {
        if (response.status === 204) {
            alert("Username does not exist.");
        }
        else if (response.data.password === this.state.password) {
            this.props.history.push("/dashboard");
        }
        else {
            alert("Incorrect Password!");
        }
    })
    }
  };

  render() {
    // const from = { pathname: '/dashboard' };
    // const { redirectToReferrer } = this.state;

    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} size="large" placeholder="Username" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                {/* <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox> */}
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>

                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
              </div>

              {/* <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p> */}

            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
  }),
  { login }
)(SignIn);
