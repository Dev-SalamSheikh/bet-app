import React from "react";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex">
          <div className="title">
            <h2>SKBET</h2>
          </div>
          <div className="amount">
            <div className="amount-wallet">
              <input type="text" readOnly />
              <button>Withdraw</button>
            </div>
          </div>
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/94852238?s=400&u=d1c388c3c50c7ad5a2cacb3fd9e9e697cf70063a&v=4"
              alt="avatarimage"
            />
            <span>Salam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
