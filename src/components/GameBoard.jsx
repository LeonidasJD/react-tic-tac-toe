export default function GameBoard() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]; //KREIRAN NIZ KOJI U SEBI SADRZI TRI NIZA - MULTI-DIMENZIONALNI NIZ

  return (
    <ol id="game-board">
      {initialGameBoard.map(
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
                    <button>{playerSymbol}</button>
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
