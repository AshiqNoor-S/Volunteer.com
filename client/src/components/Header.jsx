import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { HeaderStyle } from "../styles/HeaderStyle";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <NavLink to="/">
          <img src="./images/logo2.png" alt="logo" className="logo" />
        </NavLink>
        <Navbar />
      </HeaderStyle>
    </>
  );
};

export default Header;
