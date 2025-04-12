import React from 'react'
import "../tictactoe/tic-tac-toe.css"
import circle_icon from "../assets/circle.png"
import cross_icon from "../assets/cross.png"

const TicTacToe = () => {
  return (
    <div className='container'>
      <h1 className='tittle'>Tic Tac Toe Game In <span>React</span> </h1>
      <div className="board">
       
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe;