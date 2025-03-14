import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="text-center">
      <div className="display-4 my-4">
        {count}
      </div>
      <div className="btn-group">
        <button className="btn btn-success btn-counter-width" onClick={increment}>+</button>
        <button className="btn btn-danger btn-counter-width" onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default ClickCounter;
