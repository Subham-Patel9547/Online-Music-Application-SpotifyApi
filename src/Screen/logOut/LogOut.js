import React, { useState } from "react";
import "./logout.css";
import Login from "../Auth/Login";

function LogOut() {
  const [removeToken, setRemeoveToken] = useState();

  function logoutUser() {
    setRemeoveToken(localStorage.getItem("token"));
    localStorage.setItem("token", "null");
    console.log(removeToken);
  }

  return (
    <div className="screen-Cointainer">
      {removeToken ? (
        <Login />
      ) : (
        <div className="Logout-button">
          <div>
            <h1 className="logout-heading">Do you want to log out?</h1>
          </div>
          <div>
            <button onClick={logoutUser} className="LogoutButton">
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogOut;
