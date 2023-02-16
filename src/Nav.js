import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav>
        <img
          src="https://uploads.codesandbox.io/uploads/user/17d492df-d5c7-4861-be13-b097146157c0/MA60-logo_semicolon.png"
          alt="logo img"
          className="logo"
        />
        <span
          onClick={() => setToggleMenu((prev) => !prev)}
          className="material-symbols-outlined"
        >
          menu
        </span>
        <div
          id="black"
          style={{
            display: toggleMenu ? "block" : "none",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0"
          }}
          onClick={() => {
            setToggleMenu(false);
          }}
        ></div>
        <div
          id="menu"
          style={{
            position: "relative",
            left: toggleMenu ? "0" : "-100%",
            transition: ".3s ease-in-out"
          }}
        >
          <span id="menu_txt">MENU</span>
          <ul>
            <li
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              <Link to="/">홈</Link>
            </li>
            <li
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              <Link to="/signin">참여 대상/기간</Link>
            </li>
            {/* <li
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              <Link to="/member">멤버</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
