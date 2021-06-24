import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signup } from "../redux/actions/auth";
import "./styles/style.css";
import logo from "../assets/images/medicX.png";
import bg from "../assets/images/bg.svg";
import "./bootstrap.css";

function Register() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    signup(userData, userData.history);
  };
  return (
    <div>
      <div className="bg-left"></div>
      <div className="form-container">
        <div className="float-start">
          <img
            id="logo"
            className="my-lg-4 my-md-3 my-sm-2 my-3"
            src={logo}
            width="150"
          />
          <p id="page-text" className="text-left mx-4" style={{ color: "gray" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            laboriosam ducimus, saepe.
          </p>
          <div style={{ top: "200px" }}>
            <img src={bg} className="img" width="500" />
          </div>
        </div>

        <div className="">
          <div className="form-panel m-5">
            <div className="login-content mx-0">
              <form className="my-0 my-sm-2 my-lg-4 my-md-4 my-xl-4" onSubmit={handleSubmit}>
                <h3 className="fw-bold" style={{ color: "#5ca47a" }}>
                  Sign up to MedicX
                </h3>
                <br />
                <div className="form-section name">
                  <div className="user-icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="div">
                    <label className="px-3" for="user">
                      first name
                    </label>
                    <input type="text" id="firstname" name="firstName" className="input"
                    value={ userData.firstName }
                    onChange={ handleChange } />
                  </div>
                </div>
                <div className="form-section name">
                  <div className="user-icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="div">
                    <label className="px-3" for="user">
                      last name
                    </label>
                    <input type="text" id="lastname" name="lastName" className="input" value={ userData.lastName } onChange={ handleChange }/>
                  </div>
                </div>
                <div className="form-section mail">
                  <div className="user-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="div">
                    <label className="px-3" for="user">
                      email address
                    </label>
                    <input type="email" id="email" name="email" className="input" value={ userData.email } onChange={ handleChange } />
                  </div>
                </div>
                <div className="form-section pass">
                  <div className="user-icon">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div">
                    <label className="px-3" for="user">
                      password
                    </label>
                    <input type="password" id="password" name="password" className="input" value={ userData.password } onChange={ handleChange }/>
                  </div>
                </div>
                <input className="my-5 btnn" type="submit" value="Create Account" />

                <p className="fw-normal text-left" style={{ color: "gray" }}>
                  Already have an account?<a href="/login"> Log in</a>
                </p>

                <p className="text-left mx-5" style={{ color: "gray" }}>
                  - OR -
                </p>

                <div className="google-sign-in">
                  <a
                    href="#"
                    className="btn btn-outline-dark px-5 btn-lg btn-sm btn-md"
                  >
                    <span className="fas fa-google-plus"></span>Sign up with Google
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signup }
)(withRouter(Register));
