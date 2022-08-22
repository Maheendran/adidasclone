import React from "react";
import "./Signup.css";

export const Signup = () => {
  return (
    <div>
      <div className="main">
        <div>
          <div style={{ width: "100%", height: "220px" }}> </div>
          <div className="Resiter_main_div">
            <div className="Register_title">
              <h1>PERSONAL INFORMATION</h1>
            </div>

            <div className="Name_div">
              <input type="text" placeholder="First Name" id="firstname" />
              <input type="text" placeholder="Last Name" id="lastname" />
            </div>
            <div className="mail_div">
              <input type="text" placeholder="Enter email" id="email" />
              <br />
              <input type="text" placeholder="Phone" id="mobile" />
              <br />
              <input type="password" placeholder="Password" id="password" />
              <br />
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
