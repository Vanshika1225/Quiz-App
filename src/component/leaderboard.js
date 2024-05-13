import React, { useEffect } from "react";
import "../leaderboard.css";
const Leaderboard = () => {
  const handleSet = () => {
    return JSON.parse(localStorage.getItem("players")) || []
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <h3>LEADERBOARD</h3>
        {/* {handleSet().map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))} */}
        
         <p>{handleSet().name}</p>
         <p>{handleSet().score}</p>
      </div>
    </div>
  );
};

export default Leaderboard;
