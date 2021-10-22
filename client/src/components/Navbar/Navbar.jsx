import React from "react";
import netflixLogo from "../../images/logo/netflix-logo.png";
import { VpnKey } from "@material-ui/icons";
import { menusItems } from "../../datas";
import { colors } from "../../Variables";
import {
  Logo,
  Menu,
  Welcome,
  NavSec,
  ProfileImg,
  SignBtn,
  SignIcon,
} from "./StyleNavbar";
import { ImgFit } from "../../Variables";
import { Link, useLocation } from "react-router-dom";
import { useHomeContext, useAuthContext } from "context";
import { logOutApi } from "context/AuthContext/apiCall";

export const Navbar = ({ user }) => {
  let location = useLocation();
  let pathname = location.pathname;
  let splitPath = pathname.split("/");
  const targetPath = splitPath[splitPath.length - 1];

  const { dispatch } = useAuthContext();

  const { isScrolled } = useHomeContext();

  const logoutHandler = () => {
    logOutApi(dispatch);
  };

  return (
    <>
      <NavSec className={isScrolled ? "navbara-fix" : "navbar-normal"}>
        <Logo>
          <ImgFit src={netflixLogo} alt="logo" />
        </Logo>
        {targetPath !== "video" && (
          <>
            {user && (
              <Menu>
                {menusItems.map((item, ind) => {
                  const { title, url } = item;
                  return (
                    <div key={ind}>
                      <Link
                        style={{
                          color: pathname === url ? colors.primary : "",
                        }}
                        to={url}
                      >
                        {title}
                      </Link>
                    </div>
                  );
                })}
              </Menu>
            )}
            <Welcome>
              {user ? (
                <>
                  <p>
                    Welcome <span>{user.username}</span>
                  </p>
                  <ProfileImg>
                    <ImgFit src={user.profilePic} alt="profile" />
                  </ProfileImg>
                  <Link to="/login" onClick={logoutHandler}>
                    <SignBtn>Log out</SignBtn>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <SignBtn>login</SignBtn>
                  </Link>
                  <Link to="/register">
                    <SignBtn>
                      <VpnKey />
                      Register
                    </SignBtn>
                  </Link>
                </>
              )}

              <SignIcon></SignIcon>
            </Welcome>
          </>
        )}
      </NavSec>
    </>
  );
};
