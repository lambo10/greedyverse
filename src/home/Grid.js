import React from 'react';
import './Grid.css';

const Grid = ({ items }) => {
  return (
    <div className="lb_grid">
      {items.map((item, index) => (
        <div key={index} className="lb_grid-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Grid;