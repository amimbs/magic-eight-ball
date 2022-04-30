import './App.css';
import Eightball from './components/8ball';
import QuestionForm from './components/questionForm';
import { useState } from 'react';


function App() {

  const [answer, setAnswer] = useState('')

  let fetchAnswer = (question) => {
    let uri = "https://8ball.delegator.com/magic/JSON/" + question;
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        let newAnswer = json.magic.answer
        setAnswer(newAnswer)
      });
  };

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <Eightball answer={answer} />
        </div>
        <br />
        <div>
          <QuestionForm submitquestion={fetchAnswer} />
        </div>
      </header>
    </div>
  );
}

export default App;
