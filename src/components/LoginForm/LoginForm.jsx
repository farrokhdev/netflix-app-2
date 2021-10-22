import React, { useState } from "react";
import { FormSec } from "./LoginFormStyle";
import { InputStyled, Button, H4 } from "ConstComponents";
import { useAuthContext } from "contexts";
import { loginApi } from "contexts/AuthContext/apiCall";

export const LoginForm = () => {
  const { fetching, dispatch } = useAuthContext();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    loginApi(userInfo, dispatch);
  };

  return (
    <FormSec>
      <form action="">
        <H4>Login Form</H4>
        <div className="form-item">
          <InputStyled
            type="email"
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item">
          <InputStyled
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button disabled={fetching} onClick={loginHandler}>
          Login
        </Button>
      </form>
    </FormSec>
  );
};
