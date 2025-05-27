import React from 'react';

const Counter = ({ value }) => {
  return (
    <h3 className="counter" data-count={value}>
      {value.toLocaleString()}
    </h3>
  );
};

export default Counter; 