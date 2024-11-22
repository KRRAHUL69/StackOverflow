import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Sidebar from './Navbar';
import Questions from '../components/Questions';
import RightSidebar from './RightSidebar';

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
          params: {
            order: 'desc',
            sort: 'activity',
            tagged: 'kotlin;android;android-viewbinding;companion-object',
            site: 'stackoverflow',
          },
        });
        setQuestions(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="home">
      <Header setQuestions={setQuestions} />
      <div className="content">
        <Sidebar />
        <Questions loading={loading} questions={questions} /> 
        <RightSidebar />

      </div>
    </div>
  );
};

export default Home;
