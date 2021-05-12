import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonHeader } from "../components/Button";

const LandingPage = function () {
  return (
    <div className="landing-page">
      {/* <h1
        className="text-center"
        style={{
          color: "white",
          position: "absolute",
            right: "50px",
            top: "150px",
          fontWeight: "500",
        }}
      >
        Bring power to your steps.
      </h1> */}
      <Link to="/product">
        <button
          // className="buttonClass"
          style={{
            position: "absolute",
            right: "200px",
            top: "100px",
            height: "50px",
            width: "180px",
            backgroundColor: "transparent",
            color: "black",
            borderRadius: "3px",
            border: "1px solid black",
            fontWeight: "400",
            fontSize: "25px",
          }}
        >
          SHOP NOW
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
