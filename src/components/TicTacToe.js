import React, { useState } from 'react';
import Board from './Board';

import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [board, setBoard] = useState();
  const [error, setError] = useState('');

  const boardSizeHandler = (size) => {
    if (!size) {
      setBoard(null);
      return;
    }
    const board = Array.from(new Array(size), () => []);
    let count = 0;
    board.forEach((row, rowIndex) => {
      for (let columnIndex = 0; columnIndex <= size - 1; columnIndex++) {
        row.push({
          id: count,
          value: '-',
          rowIndex,
          columnIndex,
        });
        count++;
      }
    });
    setBoard(board);
  };

  const updateBoardHandler = (rowIndex, columnIndex, turn) => {
    const newBoard = board;
    newBoard[rowIndex][columnIndex].value = turn;
    console.log(newBoard);
    setBoard(newBoard);
  };

  const header = (
    <div
      className={`${styles.headerContainer} ${
        error ? styles.error : styles.header
      }`}
    >
      <h1>{error ? error : 'Tic Tac Toe'}</h1>
    </div>
  );

  const boardJsx = board ? (
    <Board
      board={board}
      updateBoardHandler={updateBoardHandler}
      turn={turn}
      setTurn={setTurn}
      setError={setError}
    />
  ) : (
    <>
      <h1>Please select a board size</h1>
      <button type="button" onClick={() => boardSizeHandler(3)}>
        3*3
      </button>
      <button type="button" onClick={() => boardSizeHandler(4)}>
        4*4
      </button>
      <button type="button" onClick={() => boardSizeHandler(5)}>
        5*5
      </button>
    </>
  );

  return (
    <div>
      {header}
      <h1>Turn: {turn}</h1>
      {boardJsx}
      <button type="button" onClick={() => boardSizeHandler(null)}>
        reset
      </button>
    </div>
  );
};

export default TicTacToe;
