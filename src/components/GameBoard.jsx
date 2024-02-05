import { useState } from "react";

export default function GameBoard({ onSelectSquare,board }) {
  
  // let [gameBoard, setGameBoard] = useState(initialGameBoard);  ZAKOMENTARISAN HOOK JER SMO SVE PODATKE IZ OVOG HOOKA POSTAVILI UNUTAR APP KOMPONENTE I HOOKA "gameTurns" I UMESTO DVA STANJA NAPRAVILI SMO JEDNO STANJE gameTurns U APP KOPONENTI

  // function onHandleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     //U setGameBoard KAO TRENUTNO STANJE PROVERAM PRETHODNO STANJE BOARD-A
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]), //U AZURIRANO STANJE BOARDA STAVLJAM KOPIJU STAROG STANJA(PROLAZIM KROZ NIZOVE BOARDA I PAKUJEM IH U NOVI NIZ innerArray), KOPIJA SE STAVLJA KAKO NE BI OBRISALI STARO STANJE I SAMO POSTAVILI NOVO
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSybol; //U AZURIRANO STANJE POSTAVLJAM NOVO STANJE TAKO DA U NIZ U TACAN RED I KOLONU POSTAVLJAM X
  //     return updatedBoard; //VRACAM AZURIRANO I STARO STANJE KAKO BI STARI ZNAKOVI OSTALI I DODALI SE NOVI
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map(
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
                      onClick={()=>onSelectSquare(rowIndex,colIndex)}
                      disabled ={playerSymbol !==null}
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
