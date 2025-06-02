export function Feedback(props) {
  if (props.word === props.guess) {
    return <h3>Nice one!</h3>;
  }

  if (props.show) {
    return <h3>The word is <strong>{props.word.toUpperCase()}</strong></h3>
  }
}
