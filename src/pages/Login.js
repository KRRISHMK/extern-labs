import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Card } from "reactstrap";
import { userLogin } from "../config/apiClient";
import validate from "../helper/Validator";

const Login = (props) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    await userLogin(values, (data) => {
      setLoggedIn(true);
    });
  };

  return (
    <div>
      {loggedIn && <Navigate to="/home" />}
      <div className="container pt-5">
        <div className="row">
          <div className="col align-self-center">
            <Card>
              <div className="p-3">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="label">Email Address</label>
                    <div className="control">
                      <input
                        class="form-control"
                        placeholder="Enter Your Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email || ""}
                        required
                      />
                      {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="pt-3 pb-3">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        class="form-control"
                        placeholder="Enter your Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ""}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
