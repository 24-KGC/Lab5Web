import React, { useState } from 'react';

const BuggyComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  if (count === 5) {
    throw new Error('Crashed at 5!');
  }
  return (
    <div>
      <p>Click the button. Crashes at 5!</p>
      <button onClick={() => setCount((c) => c + 1)}>Click me ({count})</button>
    </div>
  );
};

export default BuggyComponent;
