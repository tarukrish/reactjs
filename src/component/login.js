import React, { Component } from "react";
import loginData from "./loginData";
import { NavLink } from "react-router-dom";
import "../css/login.scss";
import "./inner";
//import Header from './Header';

const emailkey = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passkey = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // to  validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // to validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailkey.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  validateLogin = () => {
    console.log("validate");
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="container-wrapper">
        {/* <div className="row1">
          <div className="row1"> */}
            <div className="form-wrapper">
              {/* <div className="icon">
                <ion-icon name="person" />
              </div> */}

              <h1>Admin Login</h1>
              <h4>sign into your account</h4>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="yourname@email.com"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>

                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>

                <div className="LOGIN">
                  <NavLink to="/inner">
                    <button type="submit" onClick={() => this.validateLogin()}>
                      {" "}
                      LOGIN
                    </button>
                  </NavLink>
                </div>

                {/* <div className="remember">
                  <label for="one">
                    Remember Me
                    <input type="checkbox" id="one" name="remember" value="1"/>>
                  </label>
                </div> */}

                <div className="connect">
                  <span>Connect With</span>
                  <ion-icon name="logo-twitter" />
                  <ion-icon name="logo-facebook" />
                </div>
              </form>
            </div>
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Login;
