import { ScrambledTiles } from './ScrambledTiles';

export function Game(props) {
  return <div>
    <div className='letters'>
      <ScrambledTiles scrambledWord={props.scrambledWord} />
    </div>
    <br />
    <div className='input'>
      <div className='rack'>
        <ScrambledTiles scrambledWord={props.currentGuess} />
      </div>
      <input id="guess" onChange={props.handleGuessChange} type='text' />
    </div>


  </div>;
}
