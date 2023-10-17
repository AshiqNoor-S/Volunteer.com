import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { NavStyle } from "../styles/NavStyle";
import { ButtonStyle } from "../styles/ButtonStyle";
import {useDispatch} from "react-redux";
import {setLogout} from "../state";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <NavStyle>
      <div className={openMenu ? "menuIcon active" : "menuIcon not-active"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/home"
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
            <ButtonStyle onClick={() => dispatch(setLogout())}>Logout</ButtonStyle>
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
