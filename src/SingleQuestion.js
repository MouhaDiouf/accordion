import React, { useState } from 'react';

function SingleQuestion({ title, info }) {
  const [toggle, setToggle] = useState(false);
  const toggleText = () => {
    setToggle(!toggle);
  };
  return (
    <div className="question">
      <p>{title}</p>
      <p>{toggle ? info : info.substring(0, 100) + '...'}</p>
      <button onClick={toggleText}>See more</button>
    </div>
  );
}

export default SingleQuestion;
