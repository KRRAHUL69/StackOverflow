import React from "react";
import { RiPencilFill } from "react-icons/ri";
import { FaStackOverflow } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="section1">
        <h3>The Overflow Blog</h3>
        <ul>
          <li>
            <RiPencilFill className="pencil" /> The unexpected benefits of mentoring others
          </li>
          <li>
            <RiPencilFill className="pencil" /> Podcast 354: Building for AR with Niantic Labs' augmented reality SDK
          </li>
        </ul>
      </div>

      <div className="section1">
        <h3>Featured & Meta</h3>
        <ul>
          <li>
            <FaStackOverflow className="pencil" /> Beta release of Collectives™ on Stack Overflow
          </li>
        </ul>
      </div>

      <div className="section2">
        <h3>Hot Meta Post</h3>
        <ul>
          <li>
            <span className="vote-count">8</span> Tags [driver] and [device-driver] appear to be redundant
          </li>
          <li>
            <span className="vote-count">27</span> How to handle dupes where A is closed as dup of B but I have an answer that...
          </li>
          <li>
            <span className="vote-count">27</span> Ambiguous tag [containers]
          </li>
        </ul>
      </div>

      <div className="section-custom-filter">
        <h3>Custom Filter</h3>
        <button className="custom-filter-btn">add custom filters</button>
      </div>
    </div>
  );
};

export default RightSidebar;
