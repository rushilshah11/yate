// ArtistInput.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg from "../images/bg.png";
import "./ArtistInput.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function ArtistInput() {
  const [currentQuestion, setCurrentQuestion] = useState(1);


  const handleNext = () => {
    
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div className="QuizPage">
      <img src={bg} alt="Background" className="bg-image" />

      <div className="overlay">
        <div className="content">
          <div
            className={`quiz-question ${currentQuestion === 1 ? "active" : ""}`}
          >
            <label htmlFor="artist1" className="artist-label">
              1st Favorite Artist
            </label>
            <input
              type="text"
              id="artist1"
              placeholder="ex: Drake"
              className="artist-input"
            />
          </div>
          <div
            className={`quiz-question ${currentQuestion === 2 ? "active" : ""}`}
          >
            <label htmlFor="artist2" className="artist-label">
              2nd Favorite Artist
            </label>
            <input
              type="text"
              id="artist2"
              placeholder="ex: Kendrick Lamar"
              className="artist-input"
            />
          </div>
          <div
            className={`quiz-question ${currentQuestion === 3 ? "active" : ""}`}
          >
            <label htmlFor="artist3" className="artist-label">
              3rd Favorite Artist
            </label>
            <input
              type="text"
              id="artist3"
              placeholder="ex: Metro Boomin"
              className="artist-input"
            />
          </div>
          <div className="navigation-buttons">
            {currentQuestion !== 1 && (
              <button onClick={handleBack} className="btn-back">
                <FaArrowLeftLong />
              </button>
            )}
            {currentQuestion !== 3 ? (
              <button onClick={handleNext} className="btn-next">
                <FaArrowRightLong />
              </button>
            ) : (
              <Link to="/Loading" className="btn-next">
                <FaArrowRightLong />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistInput;
