import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Questions from '../components/Questions';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Questions />
        </main>
      </div>
    </div>
  );
};

export default Home;
