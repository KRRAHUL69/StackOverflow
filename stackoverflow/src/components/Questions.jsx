import React from 'react';
import { LuTriangle } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { GrView } from "react-icons/gr";


const TopQuestions = ({ loading, questions }) => {
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
                    padding: '5px 10px',
                    margin: '0 5px 5px 0',
                    border: '1px solid lightgrey',
                    borderRadius: '15px',
                    fontSize: '12px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </p>
            <div style={{
              width: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              color: '#555',
              padding: '5px 10px',
              margin: '0 5px 5px 0',
            }}>
              <div>
                <LuTriangle /> {question.score}
              </div>
              <div>
                <LuMessagesSquare /> {question.score}
              </div>
              <div>
                <GrView /> {question.view_count}
              </div>

            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TopQuestions;