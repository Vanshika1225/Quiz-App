import React from 'react'
// import { useNavigate } from 'react-router-dom'

const leaderboard = ({score}) => {
  // const navigate = useNavigate()
  // const handlePlayAgain=()=>{
  //   navigate("/")
  // }
  return (    
      <div>
        <h1>Game Over</h1>
        <h2>Your Score is {score}</h2>
        {/* <button onClick={() => handlePlayAgain}>Play Again</button> */}
      </div>
  )
}

export default leaderboard
