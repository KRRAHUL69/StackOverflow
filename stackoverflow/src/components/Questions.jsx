import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LuTriangle } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { GrView } from "react-icons/gr";


const TopQuestions = () => {
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

  if (loading) {
    return <p>Loading questions...</p>;
  }

  return (
    <div className="top-question-container">
      <h2>Top Question</h2>
      <header className="top-question-header">
        <div className="question-filters">
          <button className="filter-button active">Interesting</button>
          <button className="filter-button">Bountied</button>
          <button className="filter-button">Hot</button>
          <button className="filter-button">Week</button>
          <button className="filter-button">Month</button>
          <button className="ask-question-button">ASK QUESTION</button>
        </div>
      </header>

      <ul>
      {questions.map((question) => (
        <div
          key={question.question_id}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '8px',
          }}
        >
          <h2 style={{ fontSize: '16px', margin: '0 0 10px' }}>
            <a href={question.link} target="_blank" rel="noopener noreferrer">
              {question.title}
            </a>
          </h2>
          <p style={{ fontSize: '14px', color: '#777' }}>
            {question.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f2f2f2',
                  padding: '5px 10px',
                  margin: '0 5px 5px 0',
                  borderRadius: '15px',
                  fontSize: '12px',
                }}
              >
                {tag}
              </span>
            ))}
          </p>
          <p style={{ 
              fontSize: '12px', 
              color: '#555',
              padding: '5px 10px',
              margin: '0 5px 5px 0',
          }}>
            <LuTriangle /> {question.score} 
            <LuMessagesSquare /> {question.score}
            <GrView /> {question.view_count}
          </p>
        </div>
      ))}
      </ul> 
    </div>
  );
};

export default TopQuestions;