import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css"; // Import the CSS file
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Responsive bar for mobile view */}
      <div className="responsive-bar">
        <div className="logo">
          <img
            src="https://img.freepik.com/premium-vector/network-team-icon-logo-illustration_1090394-99802.jpg?w=996"
            alt="logo"
          />
        </div>
        <div className="menu" onClick={toggleMenu}>
          <h4>Menu</h4>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={isScrolled ? "black" : ""}>
        <div className="logo">
          <img
            src="https://img.freepik.com/premium-vector/network-team-icon-logo-illustration_1090394-99802.jpg?w=996"
            alt="logo"
          />
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>

          {isAuthenticated ? (
            <li style={{ marginLeft: "20%" }}>
              <button
                className=" items-end	 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => logout({ returnTo: window.location.origin })}
                style={{ marginLeft: "20px", marginBottom: "20px" }}
              >
                Log out
              </button>
            </li>
          ) : (
            <li style={{ marginLeft: "20%" }}>
              <button
                className=" items-end	 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => loginWithRedirect()}
                style={{ marginLeft: "20px", marginBottom: "20px" }}
              >
                Log In
              </button>
            </li>
          )}
          {/* {isAuthenticated && (
            <li style={{ marginLeft: "20%" }}>
              <img
                className="w-10 h-10 rounded-full "
                src={user.picture}
                alt="Rounded avatar"
                style={{ marginTop: "10px" }}
              />
            </li>
          )} */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
