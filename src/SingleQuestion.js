import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function SingleQuestion({ title, info }) {
  const [toggle, setToggle] = useState(false);
  const toggleText = () => {
    setToggle(!toggle);
  };
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleText}>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{toggle && info}</p>
    </article>
  );
}

export default SingleQuestion;
