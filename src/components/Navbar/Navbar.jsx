import React from "react";
import { Logo, Welcome, Box, ProfileImg, NavSec } from "./NavStyle";
import { ALink, H1, ImgFit, Para } from "ConstComponents";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "contexts";
import { logOutApi } from "contexts/AuthContext/apiCall";
import { Logout } from "contexts/AuthContext/AuthAction";
export const Navbar = () => {
  let location = useLocation();
  const { user, dispatch } = useAuthContext();
  return (
    <>
      {location.pathname !== "/login" && (
        <NavSec>
          <Logo>
            <H1>Admin</H1>
          </Logo>
          <Welcome>
            <Para>welcome {user && user.username}</Para>
          </Welcome>
          <Box>
            <ProfileImg>
              <ImgFit src="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" />
            </ProfileImg>
            {user ? (
              <ALink onClick={() => logOutApi(dispatch)} to="/login">
                logout
              </ALink>
            ) : (
              <ALink to="/login">login</ALink>
            )}
          </Box>
        </NavSec>
      )}
    </>
  );
};
