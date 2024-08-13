import { Link } from "react-router-dom";
import "./NavMenu.css";
import CloseIcon from "/images/icon-close.svg";
function NavMenu({toggleNavMenu}) {
  return (
    <div className="wrapper">
      <div className="nav-menu">
        <img src={CloseIcon} className="close" alt=" close icon" onClick={toggleNavMenu}/>
        <ul className="nav-list">
          <li className="nav-item">
            <a  href="#">Collections</a>
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
      </div>
    </div>
  );
}
export default NavMenu;
