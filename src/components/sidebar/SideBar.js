import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import "./sidebar.css";
const SideBar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://source.unsplash.com/random" alt="" />
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2 className="sidebar__avatar">{user.displayName}</h2>
        <h4 className="sidebar__avatar">{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,006</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>

        {recentItem("react js")}
        {recentItem("next js")}
        {recentItem("programming")}
        {recentItem("python")}
      </div>
    </div>
  );
};

export default SideBar;
