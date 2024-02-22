import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../fire";

const authContext = createContext()
export const useAuth = () => useContext(authContext)


export default function AuthContextPrvider({children}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const navigate = useNavigate();
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  // ! REGISTER
  const handleRegister = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":

          case "auth/invalid-email":
            setEmail(error.message);
            break;
          case "auth/weak-password":
            setPassword(error.message);
          default:
            break;
        }
      });
    setHasAccount(!hasAccount);
    clearInputs();
  };
  // ! LOG OUT

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  // ! LOG IN

  const handleLogIn = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((error) => {
        switch (error.code) {
          case "auth/user-disabled":
          case "auth/user-invalid-email":
          case "auth/user-not-found":
            setEmailError(Object.values(error.code));
            break;
          case "auth/wrong-password":
            setPasswordError(Object.values(error.code));
            break;
          default:
            break;
        }
      });
    clearInputs();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  },[]);

  const values = {
    user,
    email,
    password,
    hasAccount,
    emailError,
    passwordError,
    setHasAccount,
    setUser,
    setEmail,
    setPassword,
    setEmailError,
    setPasswordError,
    handleRegister,
    handleLogOut,
    handleLogIn,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
