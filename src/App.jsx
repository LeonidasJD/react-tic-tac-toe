import Header from "./components/Header";
import headerLogo from "/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  let [gameTurns,setGameTurns] = useState([]); //STANJE KOJE PRIKAZUJE PODATKE O TOME KOJI JE ZNAK NA POTEZU I KOJI DEO GAMEBORDA SMO POPUNULI  
  let [activePlayer, setActivePlayer] = useState("X");//stanje koje prikazuje  koji znak je sledeci za igru da li je sledeci klik X ili O

  function onHandleSelectPlayer(rowIndex,colIndex) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    
    setGameTurns((prevTurns)=>{ //KREIRAMO NOVO STANJE , GDE UZIUMAMO PRETHODNO STANJE TABLE ZA IGRU I PROVERAMO AKO JE TRENUTNO IGRAO X ,SLEDECI ZNAK JESTE 0
      let currentPlayer = "X";

      if(prevTurns.length > 0 && prevTurns[0].player==="X"){
          currentPlayer = "O";
      }

      const updatedTurns = [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns] // KAO NOVO STANJE POSTAVLJAMO NIZ  OD PRETHODNOG STANJE PLUS NOVO ,GDE NAM JE SQUARE ZAPRAVO 
                                                                                                  //OBJEKAT KOJI SADRZI REDOVE I KOLONE TABLE ZA IGRU I IGRACA,TJ ZNAK KOJI JE NA POTEZU

      return updatedTurns;
    });
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
            turns={gameTurns}
          />
        </div>
        <Log turnsLogs={gameTurns}/>
      </main>
    </>
  );
}

export default App;
