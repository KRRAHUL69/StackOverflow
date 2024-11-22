import React from 'react';
import Header from '../components/Header';
import Sidebar from './Navbar';
import Questions from '../components/Questions';
import RightSidebar from './RightSidebar';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Sidebar />
        <Questions />
        <RightSidebar />

      </div>
    </div>
  );
};

export default Home;
