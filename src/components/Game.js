import { ScrambledTiles } from './ScrambledTiles';

export function Game(props) {
  return <div>
    <div className='letters'>
      <ScrambledTiles scrambledWord={props.scrambledWord} />
    </div>
    <br />
    <div className='input'>
      <p>Type the word with your keyboard</p>
      <div className='rack'>
        
        <ScrambledTiles scrambledWord={props.currentGuess} />
        
      </div>
      <input id="guess" onChange={props.handleGuessChange} type='text' placeholder='The word is...'/>
    </div>


  </div>;
}
