import React from 'react';
import Cell from './Cell';
import styles from './TicTacToe.module.css';

const TicTacToe = ({ boardSize }) => {
  const getBoard = (boardSize) => {
    const board = Array.from(new Array(boardSize), () => []);
    let count = 0;
    board.forEach((element, columnIndex) => {
      const row = [];
      for (let rowIndex = 0; rowIndex <= boardSize - 1; rowIndex++) {
        row.push(<Cell key={count} id={count} />);
        count++;
      }
      board[columnIndex].push(<tr key={columnIndex}>{row}</tr>);
    });
    return board;
  };

  return (
    <table className={styles.container}>
      <tbody>{getBoard(boardSize)}</tbody>
    </table>
  );
};

export default TicTacToe;
