import React, { useState } from "react";
import logo from "../assets/img/l2.png";
import "./css/signInSignUp.css";
import {toast} from 'react-toastify';

import { Link, useHistory} from "react-router-dom"; 

const SignUp = () => {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: ""
  });

  const { email, password, name, confirmpassword } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name, confirmpassword };
      const response = await fetch(
        "http://localhost:5000/song/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      

      if (parseRes) {
        toast.error(parseRes);
      } else {
        toast.success('Signup successful');
        history.push('/signin');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh mt-5">
      <div className="40-w p-5 mt-5 rounded bg-light">
        <form onSubmit={onSubmitForm}>
          <h3 className="text-center">Create an account</h3>
          <div className="text-center mt-2 mb-3">
            <img className="img-fluid" width={80} height={80} src={logo} alt="Logo" />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control"
              id="fullname"
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="form-control"
              id="email"
              value={email}
              onChange={e => onChange(e)}

            />
            {/* {errors.email && <p className="error-message">{errors.email}</p>} */}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => onChange(e)}
            />
            {/* {errors.password && <p className="error-message">{errors.password}</p>} */}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="form-control"
              id="confirm_password"
              value={confirmpassword}
              onChange={e => onChange(e)}

            />
            {/* {errors.confirm_password && (
              <p className="error-message">{errors.confirm_password}</p>
            )} */}
          </div>
          {/* <div className="mb-5">
          <input type="checkbox" className="custom-control-input" id="check" checked={checkboxChecked} onChange={handleCheckboxChange} />
            <label htmlFor="check" className="custom-input-label">
              {" "}
              I agree to be bound by the project service terms
            </label>
            {errors.checkboxChecked && <p className="error-message">{errors.checkboxChecked}</p>}
          
          </div> */}
          <div className="d-grid">
            <button className="btn" style={{ backgroundColor: "#0F6BAE", fontSize:20, color:'white' }}>
              Sign Up
            </button>
          </div>
          <p className="text-end" style={{ fontSize: "14px", marginRight: 20 }}>
            Already have an account? <Link className="signinLink" to="/signin">Sign In</Link>
          </p>
        </form>

        {/* {successMessage && <div className="success-message">{successMessage}</div>} */}
      </div>
    </div>
  );
};

export default SignUp;

