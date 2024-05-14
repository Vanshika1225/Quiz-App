import React, { useEffect } from "react";
import "../leaderboard.css";
const Leaderboard = () => {
  const handleSet = () => {
    return JSON.parse(localStorage.getItem("players")) || [];
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-content">
        <h3>LEADERBOARD</h3>
        {handleSet().reverse().map((leader) => (
          <p>
            {leader.name} : {leader.score}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
