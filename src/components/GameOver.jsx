export default function GameOver({ winner, isRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It is a draw!</p>}
      <p>
        <button onClick={isRematch}>Rematch!</button>
      </p>
    </div>
  );
}
