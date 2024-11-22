import React, { useState } from "react"; 
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GrAchievement } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.stackexchange.com/2.3/search", {
        params: {
          order: "desc",
          sort: "activity",
          intitle: query,
          site: "stackoverflow",
        },
      });
      setQuestions(response.data.items);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) (
    <p>Loading questions...</p> 
  )

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchQuestions(searchTerm.trim()); 
    }
  };

  return (
    <header className="header">      
      <div className="header-logo">
        <a href="/logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
            alt="logo"
            className="logo"
          />
        </a>
        <span>stack<span className="logo-text">overflow</span></span>
      </div>

      <div className="header-search">
        <div className="search" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Your Answers Here..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-icon">
            <FiSearch />
          </button>
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