import { H3, ImgFit, Para, Span, ALink } from "ConstComponents";
import React from "react";
import { Content, Pic, Name, Email, SwidgetSec } from "./SwidgetStyle";

// profile tests
import Prof from "../../images/profile/1.jpg";

export const Swidget = ({ newUsers }) => {
  return (
    <SwidgetSec>
      <H3>Latest Registered Users</H3>
      {newUsers.map((user, indx) => {
        const { username, email, profilePic } = user;
        return (
          <Content key={indx}>
            <Pic>
              <ImgFit src={profilePic} />
            </Pic>
            <Name>
              <Para>{username}</Para>
            </Name>
            <Email>
              <Span>{email}</Span>
            </Email>
            <ALink to={"/"}>Display info</ALink>
          </Content>
        );
      })}
    </SwidgetSec>
  );
};
