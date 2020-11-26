import logo from './logo.svg';
import './App.css';
import data from './data';
import SingleQuestion from './SingleQuestion';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </main>
  );
}

export default App;
