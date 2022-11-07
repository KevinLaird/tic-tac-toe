import React from 'react';
import Cell from './Cell';
import styles from './TicTacToe.module.css';

const TicTacToe = () => {
  const board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const getBoard = (board) => {
    let jsx = [];
    for (let columnIndex = 0; columnIndex <= board.length - 1; columnIndex++) {
      let row = [];
      for (
        let rowIndex = 0;
        rowIndex <= board[columnIndex].length - 1;
        rowIndex++
      ) {
        row.push(<Cell id={board[columnIndex][rowIndex]} />);
      }
      jsx.push(<tr>{row}</tr>);
    }
    return jsx;
  };

  return (
    <table className={styles.container}>
      <tbody>{getBoard(board)}</tbody>
    </table>
  );
};

export default TicTacToe;
