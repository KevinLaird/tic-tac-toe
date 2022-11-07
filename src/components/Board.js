import React from 'react';
import styles from './TicTacToe.module.css';

import Cell from './Cell';

const Board = ({ boardSize, turn, setTurn, setError }) => {
  const getBoard = (boardSize) => {
    const board = Array.from(new Array(boardSize), () => []);
    let count = 0;
    board.forEach((element, columnIndex) => {
      const row = [];
      for (let rowIndex = 0; rowIndex <= boardSize - 1; rowIndex++) {
        row.push(
          <Cell
            key={count}
            id={count}
            turn={turn}
            setTurn={setTurn}
            setError={setError}
          />,
        );
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

export default Board;
