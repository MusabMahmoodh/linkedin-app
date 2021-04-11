import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LinkedInIcon from "./linkedin.svg";
import HeaderOption from "./options/HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebse";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedInIcon} alt="linkedIn" />
        <div className="header__search">
          {/* //TODO: material icon search icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={PeopleIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          onClick={logoutApp}
          title="me"
          avatar={user ? user.photoURL : ""}
        />
      </div>
    </div>
  );
};

export default Header;
