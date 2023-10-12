import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { NavStyle } from "../styles/NavStyle";
import { ButtonStyle } from "../styles/ButtonStyle";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <NavStyle>
      <div className={openMenu ? "menuIcon active" : "menuIcon not-active"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link "
              onClick={() => setOpenMenu(false)}
              to="/myprofile"
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <ButtonStyle>Logout</ButtonStyle>
          </li>
        </ul>
        {/* //nav icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </NavStyle>
  );
};

export default Navbar;
