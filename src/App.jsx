import Header from "./components/Header";
import headerLogo from "/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./wining-combinations";
import { useState } from "react";

function App() {
  let [gameTurns, setGameTurns] = useState([]); //STANJE KOJE PRIKAZUJE PODATKE O TOME KOJI JE ZNAK NA POTEZU I KOJI DEO GAMEBORDA SMO POPUNULI
  let [activePlayer, setActivePlayer] = useState("X"); //stanje koje prikazuje  koji znak je sledeci za igru da li je sledeci klik X ili O

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]; //KREIRAN NIZ KOJI U SEBI SADRZI TRI NIZA - MULTI-DIMENZIONALNI NIZ KOJI PREDSTAVLJA BOARD ZA IGRU

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    //PROLAZIMIO KROZ NIZ gameTurns KOJI JE ZAPRAVO STATE KOJI PRIKAZUJE PODATKE O SVAKOM KLIKU NA NEKO DUGME NA TABLI
    const { square, player } = turn; // KORISTIMO DESCTRUCTURING  ASSIGNMENT KAKO BI IZVUKLI VREDNOST SQUARE I PLAYER IZ OBJEKTA TURN
    const { row, col } = square; //KORISTIMO DESCTRUCTURING  ASSIGNMENT KAKO BI IZVUKLI VREDNOST ROW I COL IZ OBJEKTA SQUARE

    gameBoard[row][col] = player; // UNUTAR GAMEBOARD 2D NIZA U ODGOVAARAJUCU KOLONU I RED POSTAVLJAMO ODREDJEN ZNAK X ILI O KOJI JE DEFINISAN U OBJEKTU TURN U APP KOMPONENTI
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    //   PROLAZIMO KROZ NIZ KOMBINACIJA KOORDINATA POLJA KOJA CE OZNACITI DA IMA POBEDNIKA
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column]; //KREIRAMO TRI POLJA GDE ZA SVAKO PROVERAVAMO UNUTAR NASEG GAME BOARDA KOJE JE VREDNOSTI DA LI X ILI O
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol == secondSquareSymbol &&
      firstSquareSymbol == thirdSquareSymbol
    ) {
      console.log("winer is", firstSquareSymbol); //AKO POSTOJI PRVI ZNAK I AKO SU SVI ZNAKOVI ISTI ONDA ZNACI DA IMAMO POBEDNIKA
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner; // KONSTANTA CE BITI TRUE AKO IMAMO TACNO 9 POTEZA I AKO NEMAMO POBEDNIKA TJ AKO SE NE DEFINISE WINER VEC BUDE NULL

  function onHandleSelectPlayer(rowIndex, colIndex) {
    setActivePlayer(
      (currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X") //postavlja stanje activePlayer na X ili O koje koristimo za stilizovanje playera da li ce biti uokviren borderom ili ne
    );

    setGameTurns((prevTurns) => {
      //KREIRAMO NOVO STANJE , GDE UZIUMAMO PRETHODNO STANJE TABLE ZA IGRU I PROVERAMO AKO JE TRENUTNO IGRAO X ,SLEDECI ZNAK JESTE 0
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ]; // KAO NOVO STANJE POSTAVLJAMO NIZ  OD PRETHODNOG STANJE PLUS NOVO ,GDE NAM JE SQUARE ZAPRAVO
      //OBJEKAT KOJI SADRZI REDOVE I KOLONE TABLE ZA IGRU I IGRACA,TJ ZNAK KOJI JE NA POTEZU

      return updatedTurns;
    });
  }

  function onHandleRematchClick() {
    setGameTurns([]); //KADA KLIKNEMO NA REMACTH DUGME U MODALU POSTAVLJAMO NOVO STANJE ZA GAME TURNS ,POSTAVLJAMO PRAZAN NIZ ZNACI DA NEMA NIKAKVIH ZNAKOVA
    setActivePlayer("X"); // I POSTAVLJAMO STANJE KOJI JE ZNAK NA REDU ZA IGRU , POSTAVLJAMO X DA SE RESETUJE CSS DA SE UOKVIRI PLAYER 1
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
          {winner || hasDraw ? (
            <GameOver winner={winner} isRematch={onHandleRematchClick} />
          ) : null}
          {/*iskocice modal ako je winner true ili ako je hasDraw true inace se nece prikazati modal tj bice null*/}
          <GameBoard onSelectSquare={onHandleSelectPlayer} board={gameBoard} />
        </div>
        <Log turnsLogs={gameTurns} />
      </main>
    </>
  );
}

export default App;
