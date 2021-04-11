import { Avatar } from "@material-ui/core";
import React from "react";
import "./options.css";
const HeaderOptions = ({ title, Icon, avatar, onClick }) => {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
