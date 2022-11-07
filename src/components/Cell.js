import React from 'react';
import styles from './Cell.module.css';

const Cell = ({ id }) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <td onClick={handleClick} className={styles.cell}>
      id={id}
    </td>
  );
};

export default Cell;
