import React, { useState } from 'react';
import Board from './Board';

import styles from './TicTacToe.module.css';

const TicTacToe = ({ boardSize }) => {
  const [turn, setTurn] = useState('x');
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
