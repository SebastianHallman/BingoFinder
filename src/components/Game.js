import { ScrambledTiles } from './ScrambledTiles';

export function Game(props) {
  return <div>
    <div className='letters'>
      <ScrambledTiles scrambledWord={props.scrambledWord} />
    </div>
    <br />
    <div className='input'>
      <p>Type the word with your keyboard</p>
      <div className='rack-container'>
        <div className='rack'>
        
          <ScrambledTiles scrambledWord={props.currentGuess} />
            
        </div>
        <button className='reveal' onClick={props.handleWordReveal}>Reveal word</button>
      </div>
      
      <input id="guess" onChange={props.handleGuessChange} type='text' placeholder='The word is...'/>
      <input type='button' value="Reveal word" onClick={props.handleWordReveal}></input>
      
    </div>


  </div>;
}
