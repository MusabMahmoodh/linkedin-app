import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Feed from "./components/feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, login } from "./features/user/userSlice";
import Login from "./components/login/Login";
import { auth } from "./firebse";
import Widgets from "./components/widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
