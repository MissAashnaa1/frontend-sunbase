import React, { useState, useEffect } from "react";
import NotAllowed from "./NotAllowed";
import Home from "./Home";

const Protected = () => {
  useEffect(() => {
    let loginData = localStorage.getItem("loginData");
    loginData = JSON.parse(loginData);
    if (loginData && loginData.isLogged) {
      setIsLogedIn(true);
    } else {
      setLabel("Please Login First");
    }
  }, []);

  const [label, setLabel] = useState("Please Wait...");
  const [isLogedIn, setIsLogedIn] = useState(false);
  return isLogedIn ? <Home /> : <NotAllowed label={label} />;
};

export default Protected;
