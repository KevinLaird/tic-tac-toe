import React, { useState } from 'react';
import styles from './Cell.module.css';

const Cell = ({ id, turn, setTurn, setError }) => {
  const [clicked, setClicked] = useState(false);
  const [point, setPoint] = useState('');

  const handleClick = () => {
    if (point) {
      setError('Already clicked!');
      return;
    }
    setClicked(true);
    setPoint(turn);
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
      {point && <h1>{point}</h1>}
    </td>
  );
};

export default Cell;
