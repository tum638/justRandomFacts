import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import factsHistory from '../Cards'

function App() {
  const [fact, setFact] = useState([{
    factQuestion: "Default for now",
    factAnswer: "default answer"
  }])
  const [viewAnswer, setViewAnswer ] = useState("View Answer")
  const [flipCard, setFlipCard] = useState("");
  const [history, setHistory] = useState(0);
  const flipCardInner = () => {
    if (flipCard == "") {
      setFlipCard("flip-card-inner");
      setViewAnswer("View Question");
    }
    else {
      setFlipCard("");
      setViewAnswer("View Answer")
    }

  }
  const updateFactHistory = () => {
    if (history + 1 > factsHistory.length) {
      fetchFacts();
      return;
    }
    setHistory(history + 1);
    const fact = [factsHistory[factsHistory.length - (history+1)]]
    setFact(fact);
  }
  const fetchFacts = () => {
     if (viewAnswer !== "View Answer") {
      flipCardInner();
    } 
    if (history < 0) {
     
      setHistory(history - 1);
      const fact = [factsHistory[factsHistory.length - history]]
      console.log(fact)
      setFact(fact)
      return;
    }
   

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a489d18e6msh168fa71dd34e5bcp1f4931jsn15e0ef6bce8f',
		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
	}
};

    fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia', options)
      .then(response => response.json())
      .then(response => {
        setFact([
          {
            factQuestion: response[0].question,
            factAnswer: response[0].answer,
          }
        ]);
        const fact = {
            factQuestion: response[0].question,
            factAnswer: response[0].answer,
          }
        if (factsHistory.length >= 10) {
          factsHistory.shift();
          
          factsHistory.push(fact);
        } else {
          factsHistory.push(fact);
        }

      }
      
       )
	.catch(err => console.error(err));
  }
  const updateFact = () => {

  }
  return (
    <div className="App">
      <h1>Just Random Facts</h1>
      <p>Wanna learn something completely random and new? Youve come to the right place</p>
      <p>Number of cards: <strong>Infinite, use of API to get cards.</strong></p>
      <p>Facts stored in history: 2</p>
      <Card onUpdateFact={updateFact} fact={fact} flipCardInner={flipCard} />
      <div className="buttons">
                <div className="back-button">
          <span
            onClick={updateFactHistory}
            role="img" aria-label="smiley face" style={{ fontSize: '3rem' }}>
                        ⏪
                    </span></div>
                <div className="ViewAnswer" onClick={flipCardInner}>
                    {viewAnswer}
                </div>
                <div className="forward-button">
          <span role="img" aria-label="smiley face" style={{ fontSize: '3rem' }}
          onClick={fetchFacts}>
                        ⏩
                    </span>
                    </div>
            </div>
    </div>
  )
}

export default App
