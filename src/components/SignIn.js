import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpLastName, setSignUpLastName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleLoginEmail = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPassword = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleSignUpFirstName = (event) => {
    setSignUpFirstName(event.target.value);
  };

  const handleSignUpLastName = (event) => {
    setSignUpLastName(event.target.value);
  };

  const handleSignUpEmail = (event) => {
    setSignUpEmail(event.target.value);
  };

  const handleSignUpPassword = (event) => {
    setSignUpPassword(event.target.value);
  };

  const handleSubmitButton = (event) => {
    event.preventDefalut();
  };

  return (
    <div className="form">
      <div className="loginForm">
        <form onSubmit={handleSubmitButton}>
          <h2 class="col-md-12 text-center mb-5">Login</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onChange={handleLoginEmail}
              type="email"
              name="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={loginEmail}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Password</label>
            <input
              onChange={handleLoginPassword}
              type="password"
              name="password"
              id="password"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Password"
              value={loginPassword}
            />
          </div>
          <div class="form-group">
            <p class="text-center">
              By signing up you accept our <Link>Terms Of Use</Link>
            </p>
          </div>
          <div class="col-md-12 text-center mb-3">
            <button
              type="submit"
              class=" btn btn-block mybtn btn-danger tx-tfm"
            >
              Login
            </button>
          </div>
          {/* <div class="col-md-12 ">
              <div class="login-or">
                <hr class="hr-or" />
                <span class="span-or">or</span>
              </div>
            </div> */}
        </form>
      </div>
      <form onSubmit={handleSubmitButton}>
        <h2 class="col-md-12 text-center mb-5">Sign Up</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            onChange={handleSignUpFirstName}
            type="text"
            name="firstname"
            class="form-control"
            id="firstname"
            aria-describedby="emailHelp"
            placeholder="Enter Firstname"
            value={signUpFirstName}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Last Name</label>
          <input
            onChange={handleSignUpLastName}
            type="text"
            name="lastname"
            class="form-control"
            id="lastname"
            aria-describedby="emailHelp"
            placeholder="Enter Lastname"
            value={signUpLastName}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            onChange={handleSignUpEmail}
            type="email"
            name="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={signUpEmail}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input
            onChange={handleSignUpPassword}
            type="password"
            name="password"
            id="password"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Password"
            value={signUpPassword}
          />
        </div>
        <div class="col-md-12 text-center mb-3">
          <button type="submit" class=" btn btn-block mybtn btn-danger tx-tfm">
            Get Started For Free
          </button>
        </div>
        <div class="col-md-12 "></div>
      </form>
    </div>
  );
}

export default SignIn;
