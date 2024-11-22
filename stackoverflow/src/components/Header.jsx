import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GrAchievement } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      
      <div className="header-logo">
        <a href="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
            alt="logo"
            className="logo"
          />
        </a>
        <span>stack<span className="logo-text">overflow</span></span>
      </div>

      <div className="header-search">
        <div className="search">
          <input
            type="text"
            placeholder="Search Your Answers Here..."
            className="search-input"
          />
          <FiSearch className="search-icon" />
        </div>
        <a href="/products" className="header-link">Products</a>    
      </div>

      <div className="header-links">
        <FiMessageSquare className="header-icon" />
        <GrAchievement className="header-icon" />
        <BiMessageSquareDetail className="header-icon" />
        <FaUserCircle className="header-icon profile-icon" />

      </div>
    </header>
  );
};

export default Header;