import React, { useState } from "react";
import { FormSec, FormDesc1, GotoSignUp } from "./StyleLoginForm";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "context";
import { loginApi } from "context/AuthContext/apiCall";

export const LoginForm = () => {
  const { dispatch } = useAuthContext();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    loginApi({ email, password }, dispatch);
    if (loginApi) {
      history.push("/");
    }
  };
  return (
    <>
      <FormSec>
        {/* Login FORM  */}
        <FormDesc1>
          <p>Login Form.</p>
        </FormDesc1>
        <GotoSignUp>
          <p>
            Dont you have an acount? <Link to="/register">Sign Up</Link>
          </p>
        </GotoSignUp>
        <form action="">
          <div className="form-item">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={loginHandler}>login</button>
        </form>
      </FormSec>
    </>
  );
};
