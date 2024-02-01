import { useState } from "react";

export default function GameBoard() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]; //KREIRAN NIZ KOJI U SEBI SADRZI TRI NIZA - MULTI-DIMENZIONALNI NIZ

  let [gameBoard, setGameBoard] = useState(initialGameBoard);

  function onHandleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      //U setGameBoard KAO TRENUTNO STANJE PROVERAM PRETHODNO STANJE BOARD-A
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]), //U AZURIRANO STANJE BOARDA STAVLJAM KOPIJU STAROG STANJA(PROLAZIM KROZ NIZOVE BOARDA I PAKUJEM IH U NOVI NIZ innerArray), KOPIJA SE STAVLJA KAKO NE BI OBRISALI STARO STANJE I SAMO POSTAVILI NOVO
      ];
      updatedBoard[rowIndex][colIndex] = "X"; //U AZURIRANO STANJE POSTAVLJAM NOVO STANJE TAKO DA U NIZ U TACAN RED I KOLONU POSTAVLJAM X
      return updatedBoard; //VRACAM AZURIRANO I STARO STANJE KAKO BI STARI ZNAKOVI OSTALI I DODALI SE NOVI
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map(
        (
          row,
          rowIndex // PROLAZIM KROZ NIZ initialGameBoard  I OD NJEGA KREIRAM LIST ITEM KAKO BIH DOBIO 3 REDA OD TRI NIZA KOJI SU U initialGameBoard NIZU
        ) => (
          <li key={rowIndex}>
            <ol>
              {row.map(
                (
                  playerSymbol,
                  colIndex // UNUTAR LIST ITEMA PROLAZIM KROZ SVAKI POJEDINACNI NIZ row  JER JE ROW KREIRAN KROZ MAP . I TAKO UNUTAR SVAKOG LIST ITEM IMAM PO TRI LIST ITEMA UNUTAR
                ) => (
                  <li key={colIndex}>
                    <button
                      onClick={() => onHandleSelectSquare(rowIndex, colIndex)}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                )
              )}
            </ol>
          </li>
        )
      )}
    </ol>
  );
}
