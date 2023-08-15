import Style from "../assets/styles/styles.module.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  console.log(sidebarVisible);
  return (
    <>
      <div className={Style.header}>
        <div className={Style.logo}>
          <div
            className={Style.mob_header_icon}
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {/* Embedding the SVG directly */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sidebar-icon"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <Link to="/">
            <img src={logo} alt="BeyondCircuits" />
          </Link>
        </div>
        {/* desktop nav  */}
        <nav
          className={`${
            sidebarVisible ? Style.active_sidebar : Style.desk_header
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setSidebarVisible(!sidebarVisible)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
