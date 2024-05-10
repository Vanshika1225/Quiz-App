import React from 'react'
import '../leaderboard.css'
const leaderboard = ({username,score}) => {
    const playerInfo = { name: username, score: score };
    const players = JSON.parse(localStorage.getItem("players")) || [];
    players.push(playerInfo);
    localStorage.setItem("players", JSON.stringify(players));

    return (
      <div className="leaderboard">
        <div className="leaderboard-content">

          <h3>LEADERBOARD</h3>
          {players.map((player, index) => (
              <li key={index}>
                {player.name}: {player.score}
              </li>
            ))}
        </div>



      </div>
    );
}

export default leaderboard