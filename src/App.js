import './App.css';
import Eightball from './components/8ball';
import QuestionForm from './components/questionForm';
import { useState } from 'react';


function App() {

  const [answer, setAnswer] = useState('What Is Your Question?') 

  let updateAnswer = (value) => {
    setAnswer(answer + value)
  }

  let fetchAnswer = (question) => {
    let uri = "https://8ball.delegator.com/magic/JSON/" + question;
    fetch(uri)
        .then(response => response.json())
        .then(json => {
          //need to set this on the state to then pass in to the component to display
            // console.log(json.magic.answer);
            let answer = json.magic.answer
            console.log(answer)
        });
};

  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <Eightball answer={answer}/>
        </div>

        <br/>
        <p>
          {answer}
        </p>

        <div>
          <QuestionForm submitquestion={fetchAnswer}/>
        </div>
      </header>
    </div>
  );
}

export default App;
