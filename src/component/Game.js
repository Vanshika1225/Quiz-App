import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Leaderboard from "./Leaderboard";
import "../App.css";
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
    {
      id: 6,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      answer: "Au",
    },
    {
      id: 7,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      id: 8,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Arctic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      id: 9,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars",
    },
    {
      id: 10,
      question: "Who painted the famous artwork 'The Starry Night'?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      answer: "Vincent van Gogh",
    },
    {
      id: 11,
      question: "What is the capital of South Africa?",
      options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
      answer: "Pretoria",
    },
    {
      id: 12,
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      answer: "Blue Whale",
    },
    {
      id: 13,
      question: "Which scientist formulated the theory of general relativity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Stephen Hawking",
        "Niels Bohr",
      ],
      answer: "Albert Einstein",
    },
    {
      id: 14,
      question: "In what year did the Berlin Wall fall?",
      options: ["1989", "1991", "1987", "1993"],
      answer: "1989",
    },
  ];
  const navigate = useNavigate();

  const location = useLocation();
  const username = location.state ? location.state.username : null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const [score, setScore] = useState(0);

  const [changeButtonnme, setChangeButtonName] = useState(false);

  const handleNext = () => {
    console.warn("checking next");
    if (selectedOption !== null) {
      if (selectedOption === qBank[currentIndex].answer) {
        setScore((prevScore) => prevScore + 1);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      if (currentIndex == qBank.length - 1) {
        setChangeButtonName(true);
      }
    }
    if (currentIndex === 4) {
      const playerInfo = [{ name: username, score: score }];

      if (localStorage.getItem("players") !== null) {
        localStorage.setItem(
          "players",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("players")),
            ...playerInfo,
          ])
        );
      } else {
        localStorage.setItem("players", JSON.stringify(playerInfo));
      }
    }
    console.warn(localStorage.getItem("players"));
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

  if (currentIndex === qBank.length) {
    return <Leaderboard />;
  }

  return (
    <div className="Game">
      <div className="prev-button">
        <p onClick={prevButton}>&lt; previous</p>
        <span>{qBank[currentIndex].id}/14</span>
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
        <button onClick={handleNext}>
          {currentIndex === qBank.length - 1 && !changeButtonnme
            ? "Submit"
            : "next"}
        </button>
      </div>
    </div>
  );
};

export default Game;
