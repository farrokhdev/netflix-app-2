import React, { useState } from "react";
import { storage } from "firebase";

import { InputStyled, LabelStyled, H4, Button, Span } from "ConstComponents";
import { Form } from "./CreateFormStyle";
import { CreateUserApi } from "contexts/UserContext/apiCall";
import { useUserContext } from "contexts";

export const CreateUserForm = () => {
  const [user, setUser] = useState();
  const [profilePic, setProfilePic] = useState();
  const { dispatch } = useUserContext();

  const [progress, setProgress] = useState(0);

  const changeHandler = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const upload = (item) => {
    const fileName = new Date().getTime() + item.label + item.file.name;
    const uploadtask = storage.ref(`/item/${fileName}`).put(item.file);
    uploadtask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => console.log(err),
      () => {
        uploadtask.snapshot.ref.getDownloadURL().then((url) =>
          setUser((prev) => {
            return { ...prev, [item.label]: url };
          })
        );
      }
    );
  };
  const uploadHandler = (e) => {
    e.preventDefault();
    upload({ file: profilePic, label: "profilePic" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    CreateUserApi(user, dispatch);
  };

  return (
    <Form>
      <H4>create user</H4>
      <form action="">
        <div className="formItem">
          <LabelStyled htmlFor="firstname">firstname</LabelStyled>
          <InputStyled
            type="text"
            id="firstname"
            name="firstname"
            placeholder={"firstname"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="lastname">lastname</LabelStyled>
          <InputStyled
            type="text"
            id="lastname"
            name="lastname"
            placeholder={"lastname"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="username">username</LabelStyled>
          <InputStyled
            type="text"
            id="username"
            name="username"
            placeholder={"username"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="email">email</LabelStyled>
          <InputStyled
            type="email"
            id="email"
            name="email"
            placeholder={"email"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="password">password</LabelStyled>
          <InputStyled
            type="password"
            id="password"
            name="password"
            placeholder={"password"}
            onChange={changeHandler}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="profilePic">profilePic</LabelStyled>
          <InputStyled
            type="file"
            id="profilePic"
            name="profilePic"
            placeholder={"profilePic"}
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="isadmin">isadmin</LabelStyled>
          <select
            name="isadmin"
            id="isadmin"
            placeholder={"isAdmin"}
            onChange={changeHandler}
          >
            <option value="true">yes</option>
            <option value="false">no</option>
          </select>
        </div>

        <Button disabled={profilePic ? false : true} onClick={submitHandler}>
          Create
        </Button>

        {profilePic && (
          <div className="uploadBox">
            {progress !== 100 ? (
              <Span>the upload in progress {progress} %</Span>
            ) : (
              <Span>the upload is complited now you can create</Span>
            )}

            <Button className="upload" onClick={uploadHandler}>
              upload
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};
