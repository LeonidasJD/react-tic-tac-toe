import Header from "./components/Header";
import headerLogo from "/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  let [activePlayer, setActivePlayer] = useState("X");

  function onHandleSelectPlayer() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    console.log(activePlayer);
  }

  return (
    <>
      <Header
        text={"Tic-Tac-Toe"}
        image={headerLogo}
        alternative={"Hand drawn tic tac toe logo"}
      />

      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName={"Player1"}
              symbol={"X"}
              isActive={activePlayer === "X"}
            />
            <Player
              initialName={"Player2"}
              symbol={"O"}
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={onHandleSelectPlayer}
            activePlayerSybol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
