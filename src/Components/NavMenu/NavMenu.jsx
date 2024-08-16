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
            <Link to="/Collections">Collections</Link>
          </li>
          <li className="nav-item">
            <Link to="/Men">Men</Link>
          </li>
          <li className="nav-item">
            <Link to="/Women">Women</Link>
          </li>
          <li className="nav-item">
            <Link to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavMenu;
