import React, { useState } from 'react';
import styles from './Cell.module.css';

const Cell = ({
  value,
  updateBoardHandler,
  rowIndex,
  columnIndex,
  turn,
  setTurn,
  setError,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (value !== '-') {
      setError('Already clicked!');
      return;
    }
    updateBoardHandler(rowIndex, columnIndex, turn);
    setClicked(true);
    if (turn === 'x') {
      setTurn('o');
    } else {
      setTurn('x');
    }
    setError('');
  };

  return (
    <td
      onClick={handleClick}
      className={`${styles.cell} ${clicked ? styles.clicked : ''}`}
    >
      {value !== '-' && <h1>{value}</h1>}
    </td>
  );
};

export default Cell;
