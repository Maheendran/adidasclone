import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const sigin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => navigate("/"))

      .catch((error) => console.error(error));
  };
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password).then((auth) =>
      navigate("/login")
    );
    alert("account created").catch((error) => console.error(error));
  };
  return (
    <div>
      <div style={{ width: "100%", height: "220px" }}> </div>
      <div className="Login_main">
        <div className="Already_user">
          <div className="title_div">
            <h1>REGISTERED CUSTOMERS</h1>
          </div>
          <p>If you have an account, sign in with your email address.</p>

          <div>
            <input
              placeholder="Enter Email"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => sigin()}>SIGNIN</button>
        </div>

        <div className="New_user">
          <div className="New_title_div">
            <h1>NEW CUSTOMERS</h1>
          </div>
          {/* <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p> */}
          <div>
            <input
              placeholder="Enter Email"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              register();
            }}
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};
