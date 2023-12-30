import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {
  const navigate = useNavigate();
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <p>Sign In With Google To Continue</p>
      <button className="lwgb" onClick={signIn}>Sign in with google</button>
    </div>
  );
}

export default Login;
