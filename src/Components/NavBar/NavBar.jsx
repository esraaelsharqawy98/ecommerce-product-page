import { Link } from "react-router-dom";
import "./NavBar.css";
import CartIcon from "/images/icon-cart.svg";
import ProfileImage from "/images/image-avatar.png";
import Logo from "/images/logo.svg";
import MenuIcon from "/images/icon-menu.svg";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
function NavBar() {
  const [isNavMenuVisible, setiIsNavMenuVisible] = useState(false);
  function toggleNavMenu() {
    setiIsNavMenuVisible(!isNavMenuVisible);
  }
  return (
    <header>
      <nav>
        <div className="menu">
          <img src={MenuIcon} alt="menu icon" onClick={toggleNavMenu} />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Collections</a>
          </li>
          <li className="nav-item">
            <a href="#">Men</a>
          </li>
          <li className="nav-item">
            <a href="#">Women</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-icons">
          <a href="#">
            <img src={CartIcon} className="cart" alt="cart icon" />
          </a>
          <img src={ProfileImage} className="profile" alt="profile image" />
        </div>
      </nav>

      {isNavMenuVisible && (
        <NavMenu toggleNavMenu={toggleNavMenu} />
      )}
    </header>
  );
}
export default NavBar;
