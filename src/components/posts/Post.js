import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import InputOption from "../feed/input__option/InputOption";
import "./post.css";
const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
