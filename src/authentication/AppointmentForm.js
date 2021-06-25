import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appoint } from "../redux/actions/auth";
import Footer from "../components/Footer";

function AppointmentForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    date: null
  });
  const dispatch = useDispatch();
  const appointData = useSelector((state) => state.appointData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(appoint(input));
  };
  const handleChange = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };
  return (
    <div>
      <form
        className="my-0 my-sm-2 my-lg-4 my-md-4 my-xl-4"
        onSubmit={handleSubmit}
      >
        <h3 className="fw-bold" style={{ color: "#5ca47a" }}>
          Schedule an appointment with doctor
        </h3>
        <br />
        <div className="form-section name">
          <div className="div">
            <label className="px-3" for="user">
              first name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              className="input"
              value={input.fullname}
              onChange={handleChange}
            />
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
            <input
              type="text"
              id="lastname"
              name="lastName"
              className="input"
              value={input.lastName}
              onChange={handleChange}
            />
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
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              value={input.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-section pass">
          <div className="user-icon">
            <i className="fas fa-lock"></i>
          </div>
          <div className="div">
            <label className="px-3" for="user">
              gender
            </label>
            <input
              type="text"
              id="password"
              name="gender"
              className="input"
              value={input.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">submit</button>
        {appointData}
      </form>
      <Footer />
    </div>
  );
}

export default AppointmentForm;
