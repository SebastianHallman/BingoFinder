import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Game } from './components/Game';
import { Feedback } from './components/Feedback';

function App() {

  const [correctWord, setCorrectWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [currentGuess, setCurrentGuess] = useState('')

  const url = 'https://random-word-api.herokuapp.com/word?length=7'; // url

  const fetchWord = () => {
   fetch(url).then(word => {return word.json()}).then(w => {setCorrectWord(w[0])}); 
  }

  useEffect(() => {
   fetchWord()

  }, [])

  useEffect(() => {
    
   const handleType = (e) => {
    if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < 7) {
      setCurrentGuess(old => old + e.key)
    }

    if (e.keyCode ==  8) {
      setCurrentGuess(old => old.substring(0, old.length - 1))
    }

    
   }

   window.addEventListener('keydown', handleType)
   return () => {window.removeEventListener('keydown',handleType)}
  }, [currentGuess])

  useEffect(() => {
    setScrambledWord(correctWord.split("").sort(() => 0.5 - Math.random()).join(""));
    console.log(correctWord)
  }, [correctWord])

  useEffect(() => {
    if (currentGuess === correctWord) {
      console.log("You did it");
      setTimeout(fetchWord, 3000)
      setTimeout(() => setCurrentGuess(""), 3000)
      document.getElementById("guess").value = '';
      
    }
  }, [currentGuess])
    
  const handleGuessChange = (e) => {
    const value = e.target.value;
    setCurrentGuess(value);
    
  }

  return (
    <div className="App">
      <div className='header'>
        <h1>Bingo finder</h1>
        <p>Can you find the 7 word from these tiles?</p>
      </div>
      <Game scrambledWord={scrambledWord} currentGuess={currentGuess} handleGuessChange={handleGuessChange}/>
      <Feedback word={correctWord} guess={currentGuess}/>

    </div>
  );
}

export default App;
