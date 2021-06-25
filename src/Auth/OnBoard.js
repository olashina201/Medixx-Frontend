import React, { useState } from "react";
import FileBase from "react-file-base64";
import "./authentication.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";

function OnBoard() {
  const [onboardData, setOnboardData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    weight: null,
    height: null,
    phone: "",
    gender: "",
    age: null,
    bloodGroup: "",
    picture: ""
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setOnboardData({ ...onboardData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(onboardData, history));
    history.push("/dashboard");
  };
  return (
    <div className="form-modal">
      <div className="form-toggle">
        <button id="login-toggle" onclick="toggleLogin()">
          OnBoarding...
        </button>
      </div>

      <div id="signup-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={onboardData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={onboardData.lastName} onChange={handleChange}/>
          <input type="text" name="email" placeholder="email" value={onboardData.email} onChange={handleChange} />
          <input type="text" name="password" placeholder="password" value={onboardData.password} onChange={handleChange}/>
          <input type="number" name="weight" placeholder="Weight" value={onboardData.weight} onChange={handleChange}/>
          <input type="number" name="height" placeholder="Height" value={onboardData.height} onChange={handleChange}/>
          <input type="number" name="phone" placeholder="Contact Number" value={onboardData.phone} onChange={handleChange}/>
          <input type="text" name="gender" placeholder="gender" value={onboardData.gender} onChange={handleChange}/>
          <input type="date" name="age" placeholder="Date of Birth" value={onboardData.age} onChange={handleChange}/>
          <input type="number" name="bloodGroup" placeholder="Blood group" value={onboardData.bloodGroup} onChange={handleChange}/>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setOnboardData({ ...onboardData, picture: base64 })} />
          <button type="submit" className="btn signup">
            create account
          </button>
          <p>
            Clicking <strong>create account</strong> means that you are agree to
            our <a href="">terms of services</a>.
          </p>
          <hr />
        </form>
      </div>
    </div>
  );
}

export default OnBoard;
