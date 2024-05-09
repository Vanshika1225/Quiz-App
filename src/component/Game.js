import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Leaderboard from "./leaderboard";
const Game = () => {
  const qBank = [
    {
      id: 1,
      question: "What is the capital of Haryana?",
      options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
      answer: "Chandigarh",
    },
    {
      id: 2,
      question: "What is the capital of Punjab?",
      options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
      answer: "Chandigarh",
    },
    {
      id: 3,
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "Delhi",
    },
    {
      id: 4,
      question: "What is the capital of Uttarakhad?",
      options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
      answer: "Dehradun",
    },
    {
      id: 5,
      question: "What is capital of Uttar Pradesh?",
      options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
      answer: "Lucknow",
    },
  ];

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);
 
  const [score,setScore] = useState(0);
  const handleNext = () => {
    if (selectedOption !== null) {
      if(selectedOption === qBank[currentIndex].answer){
        setScore((prevScore)=>prevScore + 1)
      }
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

 
  const prevButton = () => {
    if (currentIndex >= 1) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      navigate("/");
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  if(currentIndex === qBank.length){
    return <Leaderboard score={score}/>
  }

  return (
    <div className="Game">
      <div className="prev-button">
        <p onClick={prevButton}>&lt; previous</p>
        <span>{qBank[currentIndex].id} /5</span>
      </div>
      <div className="questions">
        <p>{qBank[currentIndex].question}</p>
      </div>
      <div className="options">
        {qBank[currentIndex].options.map((option) => (
          <div className="opeion-inside">
            <input
              type="radio"
              name="option"
              value={option}
              className="form-check-input"
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <p>{option}</p>
          </div>
        ))}
      </div>

      <div className="next-btn">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Game;