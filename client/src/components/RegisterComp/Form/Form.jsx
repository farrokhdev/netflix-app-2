import React, { useState } from "react";
import { axiosInstance } from "config";
import {
  FormSec,
  FormTitle,
  FormDesc1,
  FormDesc2,
  GotoSignUp,
} from "./StyleForm";
import { Link, useHistory } from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = useState();
  const [emailvalue, setEmailValue] = useState();

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [isadmin, setIsadmin] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(emailvalue);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("auth/register", {
        email,
        firstname,
        lastname,
        username,
        password,
        isadmin,
      });
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormSec>
        {/* REGISTER FORM  */}
        <FormTitle>
          <h1>Unlimited movies, TV shows, and more.</h1>
        </FormTitle>

        {!email ? (
          <>
            <FormDesc1>
              <p>Watch anywhere. Cancel anytime.</p>
            </FormDesc1>
            <FormDesc2>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </FormDesc2>
            <GotoSignUp>
              <p>
                Already have an acount? <Link to="/login">Sign In</Link>
              </p>
            </GotoSignUp>
            <div className="starter">
              <div className="form-item">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <button onClick={emailHandler}> your email</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <FormDesc2>
              <p>Enter your username and password</p>
            </FormDesc2>
            <form action="">
              <div className="form-item">
                <label htmlFor="firstname">Firstname</label>
                <input
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="lastname">Lastname</label>
                <input
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="isAdmin">isAdmin</label>
                <select
                  type="isAdmin"
                  id="isAdmin"
                  name="isAdmin"
                  onChange={(e) => setIsadmin(e.target.value)}
                >
                  <option value="true">yes</option>
                  <option value="false">no</option>
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-item">
                <button onClick={submitHandler}>register</button>
              </div>
            </form>
          </>
        )}
      </FormSec>
    </>
  );
};
