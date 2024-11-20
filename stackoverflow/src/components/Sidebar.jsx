import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <ul>Home</ul>
        <ul className='nav-links'>PUBLIC
            <li>Questions</li>
            <li>Tags</li>
            <li>Users</li>
        </ul>
        <ul className='nav-links'>COLLECTIVES
            <li>Explore Jobs</li>
        </ul>
        <ul className='nav-links'>FIND JOBS
            <li>Jobs</li>
            <li>Companies</li>
        </ul>
        <ul className='nav-links'>TEAMS
            <li>Create a Team</li>
        </ul>
    </aside>
  );
};

export default Sidebar;
