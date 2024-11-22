import React from "react";
import { NavLink } from "react-router-dom";
// import { RiHome2Line } from "react-icons/ri";
// import { GoPeople } from "react-icons/go";
// import { TbMedicalCrossCircle } from "react-icons/tb";

const Sidebar = () => {
  const menuSections = [
    {
        title: "HOME",
    },
    {
      title: "PUBLIC",
      items: [
        { label: "Questions", route: "/questions" },
        { label: "Tags", route: "/tags" },
        { label: "Users", route: "/users" },
      ],
    },
    {
      title: "COLLECTIVES",
      items: [{ label: "Explore Jobs", route: "/explore-jobs" }],
    },
    {
      title: "FIND JOBS",
      items: [
        { label: "Jobs", route: "/jobs" },
        { label: "Companies", route: "/companies" },
      ],
    },
    {
      title: "TEAMS",
      items: [{ label: "+ Create a team", route: "/create-team" }],
    },
  ];

  return (
    <div className="sidebar">
      {menuSections.map((section, index) => (
        <div key={index} className="sidebar-section">
          <h4 className="section-title">{section.title}</h4>
          {section.items?.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.route}
              className="sidebar-item"
              activeClassName="active"
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;