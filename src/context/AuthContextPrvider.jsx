import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthContextPrvider() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const navigate = useNavigate()

  
  return <div></div>;
}
