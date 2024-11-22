import React from "react";

const TopQuestion = () => {

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
    </div>
  );
};

export default TopQuestion;