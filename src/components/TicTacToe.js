import React, { useState } from 'react';
import Board from './Board';

import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState();
  const [error, setError] = useState('');

  const boardSizeHandler = (size) => {
    if (!size || winner) {
      setWinner(null);
      setBoard(null);
      return;
    }
    const board = Array.from(new Array(size), () => []);
    let count = 0;
    board.forEach((row, rowIndex) => {
      for (let columnIndex = 0; columnIndex < size; columnIndex++) {
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

  const isHorizontalWinner = (symbol, board) => {
    return board.some((moves) => moves.every((move) => move.value === symbol));
  };

  const isVerticalWinner = (symbol, board) => {
    const transposedBoard = board.map((_, index) =>
      board.map((row) => row[index]),
    );
    return transposedBoard.some((moves) =>
      moves.every((move) => move.value === symbol),
    );
  };

  const isDiagonalWinner = (symbol, board) => {
    const diagonalMoves = [];
    const equalBasedDiagonal = [];
    const sumBasedDiagonal = [];

    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        if (row === column) {
          equalBasedDiagonal.push(board[row][column]);
        }
      }
    }
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        if (row + column === board.length - 1) {
          sumBasedDiagonal.push(board[row][column]);
        }
      }
    }

    diagonalMoves.push(equalBasedDiagonal, sumBasedDiagonal);

    return diagonalMoves.some((moves) =>
      moves.every((move) => move.value === symbol),
    );
  };

  const isGameOver = (board) =>
    board.every((row) => row.every((move) => move.value !== '-'));

  const checkWinner = (turn, board) => {
    if (isGameOver(board)) {
      return "It's a tie!";
    }
    return (
      isHorizontalWinner(turn, board) ||
      isVerticalWinner(turn, board) ||
      isDiagonalWinner(turn, board)
    );
  };

  const updateBoardHandler = (rowIndex, columnIndex, turn) => {
    const newBoard = board;
    newBoard[rowIndex][columnIndex].value = turn;
    const winnerCheck = checkWinner(turn, newBoard);
    if (winnerCheck === "It's a tie!") {
      setWinner(winnerCheck);
      return;
    }
    if (checkWinner(turn, newBoard)) {
      setWinner(turn);
      return;
    }
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

      {winner && winner !== "It's a tie!" && (
        <h1>Congratulations! Player {winner} won!</h1>
      )}
      {winner === "It's a tie!" && <h1>That's a tie. Nobody wins!</h1>}
      {!winner && (
        <>
          <h1>Turn: {turn}</h1>
          {boardJsx}
        </>
      )}
      <button type="button" onClick={() => boardSizeHandler(null)}>
        reset
      </button>
    </div>
  );
};

export default TicTacToe;
