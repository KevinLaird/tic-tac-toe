import React, { useState } from 'react';
import Board from './Board';

import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [boardSize, setBoardSize] = useState(3);
  const [error, setError] = useState('');

  return (
    <div>
      <div
        className={`${styles.headerContainer} ${
          error ? styles.error : styles.header
        }`}
      >
        <h1>{error ? error : 'Tic Tac Toe'}</h1>
      </div>

      <input type="text"></input>
      <h1>Turn: {turn}</h1>
      <Board
        boardSize={boardSize}
        turn={turn}
        setTurn={setTurn}
        setError={setError}
      />
    </div>
  );
};

export default TicTacToe;
