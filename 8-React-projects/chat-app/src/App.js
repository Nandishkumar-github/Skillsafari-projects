import React, { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
const cookies = new Cookies();

function App() {
  const [isAuth, setisAuth] = useState(cookies.get("auth-token"));
  const [Room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setisAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setisAuth={setisAuth}/>
      </div>
    );
  }
  return (
  <>
    {Room ? (
    <Chat room={Room} />
    ) : (
    <div className="room">
      <label>Enter Room Name:</label>
      <input ref={roomInputRef} />
      <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
      </div>
    )}
    <div className="sign-out">
      <button onClick={signUserOut}>Sign Out</button>
    </div>
    </>
  );
}

export default App;
