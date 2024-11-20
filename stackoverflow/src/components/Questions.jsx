import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get('https://api.stackexchange.com/docs');
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="questions-container">
      {questions.map(question => (
        <div key={question.question_id} className="question">
          <h3>{question.title}</h3>
          <p>Tags: {question.tags.join(', ')}</p>
          <p>Score: {question.score}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
