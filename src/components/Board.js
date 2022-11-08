import React from 'react';
import styles from './TicTacToe.module.css';

import Cell from './Cell';

const Board = ({ board, updateBoardHandler, turn, setTurn, setError }) => {
  const getBoard = (board) => {
    const boardJsx = [];
    board.forEach((row, rowIndex) => {
      const rowJsx = [];
      row.forEach((cell) => {
        rowJsx.push(
          <Cell
            key={`${rowIndex}-${cell.columnIndex}-${cell.id}`}
            value={cell.value}
            rowIndex={cell.rowIndex}
            columnIndex={cell.columnIndex}
            updateBoardHandler={updateBoardHandler}
            turn={turn}
            setTurn={setTurn}
            setError={setError}
          />,
        );
      });
      boardJsx.push(<tr key={rowIndex}>{rowJsx}</tr>);
    });
    return boardJsx;
  };

  return (
    <table className={styles.container}>
      <tbody>{getBoard(board)}</tbody>
    </table>
  );
};

export default Board;
