import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./feed.css";
import InputOption from "./input__option/InputOption";
import Post from "../posts/Post";
import { db } from "../../firebse";
import firebase from "firebase";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    console.log(posts);
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Musab",
      description: "test",
      message: message,
      photoURL: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#7865f9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#e7a33e" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c8c8cd" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts &&
          posts.map(
            ({ id, data: { name, description, message, photoURL } }) => (
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
              />
            )
          )}
      </FlipMove>
    </div>
  );
};

export default Feed;
