import React from "react";
import { InputStyled, LabelStyled, H4, Button } from "ConstComponents";
import { Form } from "./EditFormStyle";

export const UserForm = ({ user }) => {
  return (
    <Form>
      <H4>edit user</H4>
      <form action="">
        <div className="formItem">
          <LabelStyled htmlFor="firstname">firstname</LabelStyled>
          <InputStyled
            type="text"
            id="firstname"
            name="firstname"
            placeholder={user.firstname}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="lastname">lastname</LabelStyled>
          <InputStyled
            type="text"
            id="lastname"
            name="lastname"
            placeholder={user.lastname}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="username">username</LabelStyled>
          <InputStyled
            type="text"
            id="username"
            name="username"
            placeholder={user.username}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="email">email</LabelStyled>
          <InputStyled
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="file">file</LabelStyled>
          <InputStyled
            type="file"
            id="file"
            name="file"
            placeholder={user.profilePic}
          />
        </div>
        <div className="formItem">
          <LabelStyled htmlFor="isadmin">isadmin</LabelStyled>
          <select name="isadmin" id="isadmin" placeholder={user.isAdmin}>
            <option value="true">yes</option>
            <option value="false">no</option>
          </select>
        </div>

        <Button>Submit</Button>
      </form>
    </Form>
  );
};
