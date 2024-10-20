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
      setIsScrolled(window.scrollY > 0);
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
      <div className="responsive-bar" >
        <div className="logo">
          <img src=".\src\assets\Pro.jpeg" alt="logo" />
        </div>
        <div className="menu" onClick={toggleMenu}>
          <h4>Menu</h4>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={isScrolled ? "black" : ""}>
        <div className="logo">
          <img src=".\src\assets\Pro.jpeg" alt="logo" />
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/form">Register Form</a>
          </li>

          <li>
            <a href="/contact">Contact Us</a>
          </li>

          {isAuthenticated ? (
            <li style={{ marginLeft: "20%" }}>
              <button
                className="items-end text-white bg-purple-500 hover:bg-purple-8=600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                onClick={() => logout({ returnTo: window.location.origin })}
                style={{ marginBottom: "20px" }}
              >
                Log out
              </button>
            </li>
          ) : (
            <li style={{ marginLeft: "20%" }}>
              <button
                className="items-end text-white bg-purple-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => loginWithRedirect()}
                style={{ marginBottom: "20px" }}
              >
                Log In
              </button>
            </li>
          )}
          {/* Uncomment if you want to display user avatar */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
